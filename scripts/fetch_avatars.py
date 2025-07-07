import os
import re
import requests

DATA_FILE = "data/hermits.ts"

BASE_DIRS = {
    "face_128": "public/avatars/faces/128",
    "face_256": "public/avatars/faces/256",
    "head_128": "public/avatars/heads/128",
    "head_256": "public/avatars/heads/256",
}

# Ensure all folders exist
for path in BASE_DIRS.values():
    os.makedirs(path, exist_ok=True)

def parse_hermits(ts_file):
    with open(ts_file, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = re.findall(r"{[^{}]*?username:.*?}", content, re.DOTALL)
    hermits = []

    for block in blocks:
        username_match = re.search(r'username:\s*"([^"]+)"', block)
        uuid_match = re.search(r'uuid:\s*"([^"]+)"', block)
        avatar_match = re.search(r'avatar:\s*"([^"]+)"', block)

        if username_match and uuid_match and avatar_match:
            hermits.append({
                "username": username_match.group(1),
                "uuid": uuid_match.group(1),
                "avatar": avatar_match.group(1),
            })

    return hermits

def download_image(url, out_path):
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(out_path, "wb") as f:
                f.write(r.content)
            return True
        else:
            return False
    except Exception as e:
        print(f"    ⚠️  Error: {e}")
        return False

def download_all_for_hermit(hermit):
    uuid = hermit["uuid"]
    avatar = hermit["avatar"]

    print(f"👤 {hermit['username']} ({uuid})")

    targets = [
        {
            "label": "Face 128px",
            "url": f"https://crafatar.com/avatars/{uuid}?size=128",
            "path": os.path.join(BASE_DIRS["face_128"], avatar),
        },
        {
            "label": "Face 256px",
            "url": f"https://crafatar.com/avatars/{uuid}?size=256",
            "path": os.path.join(BASE_DIRS["face_256"], avatar),
        },
        {
            "label": "Head 128px",
            "url": f"https://crafatar.com/renders/head/{uuid}?size=128",
            "path": os.path.join(BASE_DIRS["head_128"], avatar),
        },
        {
            "label": "Head 256px",
            "url": f"https://crafatar.com/renders/head/{uuid}?size=256",
            "path": os.path.join(BASE_DIRS["head_256"], avatar),
        },
    ]

    for item in targets:
        success = download_image(item["url"], item["path"])
        if success:
            print(f"   ✅ {item['label']} saved")
        else:
            print(f"   ❌ {item['label']} failed")

def main():
    print("🔍 Reading data/hermits.ts...")
    hermits = parse_hermits(DATA_FILE)
    print(f"✅ Found {len(hermits)} hermits with UUIDs\n")

    for hermit in hermits:
        download_all_for_hermit(hermit)

    print("\n🎉 Done downloading all avatars and heads!")

if __name__ == "__main__":
    main()
