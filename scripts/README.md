# 🛠️ Scripts for HermitLog

This folder contains utility scripts used to manage and fetch data for the HermitLog project.

## Requirements

These scripts require Python 3 and the `requests` library.

Install dependencies:

```bash
pip install requests
```

---

## 📜 `check_uuids.py`

Validates and updates UUIDs of all Hermits based on their Minecraft usernames.

### What it does:

- Parses `data/hermits.ts`
- Fetches current UUIDs from Mojang's API
- Updates any mismatches
- Logs updated/unchanged entries

Run it with:

```bash
python scripts/check_uuids.py
```

---

## 🖼️ `fetch_avatars.py`

Downloads Minecraft face and rendered head avatars for all Hermits using [Crafatar](https://crafatar.com).

### What it does:

- Downloads 128x128 and 256x256 face avatars
- Downloads 128x128 and 256x256 3D head renders
- Saves them into `public/avatars/` folder structure

Run it with:

```bash
python scripts/fetch_avatars.py
```

---

## Folder Output

```
public/
└── avatars/
    ├── faces/
    │   ├── 128/
    │   └── 256/
    └── heads/
        ├── 128/
        └── 256/
```

---

## Notes

- Scripts are one-off utilities; no TypeScript/Node.js setup needed.
- Make sure `data/hermits.ts` has the `uuid`, `username`, and `avatar` fields correctly filled.