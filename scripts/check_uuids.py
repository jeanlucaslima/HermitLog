import re
import requests
from pathlib import Path
from rich import print
from rich.table import Table
from rich.console import Console

console = Console()

hermits_file = Path(__file__).resolve().parent.parent / "data" / "hermits.ts"

def read_hermits_file():
    print("🔍 Reading data/hermits.ts...")
    return hermits_file.read_text(encoding="utf-8")

def extract_hermit_blocks(file_content):
    match = re.search(r"export const hermits: Hermit\[\] = \[(.*?)\n\];", file_content, re.DOTALL)
    if not match:
        print("[red]❌ Could not find hermits array in the file.[/red]")
        return [], file_content

    array_body = match.group(1)
    # Split hermit blocks (each starts with a newline and two spaces and `{`)
    raw_blocks = re.findall(r"(\s+{.*?\n\s+})", array_body, re.DOTALL)
    print(f"✅ Found hermits array, extracting objects...")
    print(f"ℹ️  Found {len(raw_blocks)} hermit objects in the array.")
    return raw_blocks, file_content

def get_field(block, field):
    match = re.search(rf'{field}\s*:\s*"([^"]+)"', block)
    return match.group(1) if match else None

def fetch_uuid(username):
    try:
        res = requests.get(f"https://api.mojang.com/users/profiles/minecraft/{username}", timeout=5)
        if res.status_code == 200:
            return res.json().get("id")
    except Exception as e:
        print(f"   ⚠️  Error fetching UUID: {e}")
    return None

def format_uuid(raw_uuid):
    if not raw_uuid: return None
    return f"{raw_uuid[0:8]}-{raw_uuid[8:12]}-{raw_uuid[12:16]}-{raw_uuid[16:20]}-{raw_uuid[20:]}"

def update_uuid_in_block(block, new_uuid):
    if 'uuid' in block:
        return re.sub(r'uuid\s*:\s*"[^"]+"', f'uuid: "{new_uuid}"', block)
    else:
        return block.rstrip().rstrip(',') + f',\n    uuid: "{new_uuid}",'

def main():
    file_content = read_hermits_file()
    blocks, full_content = extract_hermit_blocks(file_content)

    checked = 0
    updated = 0
    unchanged = 0
    results = []
    new_blocks = []

    print("🔍 Starting UUID check...\n")

    for i, block in enumerate(blocks):
        username = get_field(block, "username")
        local_uuid = get_field(block, "uuid")

        if not username:
            print(f"⚠️  Skipping block #{i+1} (no username found)")
            new_blocks.append(block)
            continue

        print(f"👤 [bold]{username}[/bold]")

        fetched_raw_uuid = fetch_uuid(username)
        fetched_uuid = format_uuid(fetched_raw_uuid)

        if not fetched_uuid:
            print(f"   ❌ Could not fetch UUID")
            new_blocks.append(block)
            continue

        if not local_uuid:
            print(f"   ➕ Adding UUID: {fetched_uuid}")
            updated_block = update_uuid_in_block(block, fetched_uuid)
            results.append((username, "(none)", fetched_uuid, "added"))
            updated += 1
        elif local_uuid.lower() != fetched_uuid.lower():
            print(f"   🔁 Mismatch. Local: {local_uuid} → Fetched: {fetched_uuid}")
            updated_block = update_uuid_in_block(block, fetched_uuid)
            results.append((username, local_uuid, fetched_uuid, "updated"))
            updated += 1
        else:
            print(f"   ✅ UUID matches: {local_uuid}")
            updated_block = block
            results.append((username, local_uuid, fetched_uuid, "unchanged"))
            unchanged += 1

        new_blocks.append(updated_block)
        checked += 1

    # Rebuild the hermits array
    rebuilt_array = ",\n  ".join(new_blocks)
    new_full_content = re.sub(
        r"(export const hermits: Hermit\[\] = \[)[\s\S]*?(\n\];)",
        rf"\1\n  {rebuilt_array}\2",
        full_content
    )

    # Save updated file
    hermits_file.write_text(new_full_content, encoding="utf-8")

    print("\n✅ Done!")
    print(f"   Checked:   {checked}")
    print(f"   Updated:   {updated}")
    print(f"   Unchanged: {unchanged}\n")

    if results:
        table = Table(title="🧾 UUID Update Summary", show_lines=True)
        table.add_column("Username", style="bold")
        table.add_column("Previous UUID", style="dim")
        table.add_column("Fetched UUID", style="cyan")
        table.add_column("Change", style="green")

        for row in results:
            table.add_row(*row)

        console.print(table)

if __name__ == "__main__":
    main()
