# HermitLog

**HermitLog** is a fan-made, work-in-progress website that documents and visualizes the activity of the HermitCraft Minecraft SMP server. Built with **Next.js**, **Incremental Static Regeneration (ISR)**, and **shadcn/ui**, the project aims to offer a clean and functional interface for exploring the rich history and dynamics of HermitCraft.

> ⚠️ This project is non-official and not affiliated with HermitCraft, Mojang, or Microsoft.

---

## 🌐 Live Features (MVP)

- 🧙‍♂️ **Hermit Profiles**
  View details about each Hermit, including avatar, channel info, status, seasons active, and more.

- 📜 **Hermits Directory**
  A list of all Hermits (active, inactive, and retired), with filters and rendered avatars.

- 🔁 **Slug Redirects**
  Multiple slugs per Hermit allow friendly access and common typos (e.g., `/grain` redirects to `/grian`).

- 🧩 **Incremental Static Regeneration (ISR)**
  All pages are statically generated and revalidated periodically for fast performance and live updates.

- 🧠 **About Page**
  Project background, attribution, and credits.

- 📁 **Scripts Folder**
  Includes Python scripts to validate UUIDs and fetch avatar/head renders via Crafatar.

- 📸 **Avatars & 3D Heads**
  Hermits have both face and isometric head renders, available in 128px and 256px, served from `/public`.

- 🌓 **Dark Mode**
  Theme toggle with system support, powered by `next-themes`.

---

## 🧭 Navigation

- `/` - Home / Landing page
- `/hermits` - List of all Hermits
- `/hermit/[slug]` - Hermit profile pages (supports aliases)
- `/timeline` *(planned)*
- `/seasons` *(planned)*
- `/about` - Project information & credits

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org) with App Router & ISR
- [shadcn/ui](https://ui.shadcn.com) for design system
- [Crafatar](https://crafatar.com) for avatar/head images
- [TypeScript](https://www.typescriptlang.org)
- [Python](https://www.python.org) for scripting UUID/image fetching

---

## 🔮 Planned Features

- 📆 **Interactive Timeline**
  Grid or heatmap showing video activity over time by season or Hermit.

- 📺 **Video Tracker**
  Filter and view latest videos from Hermits with "HermitCraft" in the title.

- ⏳ **Season Pages**
  Overview pages for each HermitCraft season, including participants, dates, and milestones.

- 🔁 **Auto Sync Script**
  Optionally integrate YouTube API to sync uploads periodically.

- 📊 **Stats & Trends**
  Insights on video frequency, Hermit activity, gaps, and return arcs.

- 🐍 **Improved CLI Scripts**
  Additional scripts for bulk editing, error checking, and image cleanup.

- 🎯 **Search & Fuzzy Matching**
  Quick search for Hermits, episodes, seasons, or tags.

- 🌐 **Multi-language support** *(optional)*
  Bilingual (English/Portuguese) layout to reflect the creator's roots.

---

## 🧪 Local Setup

```bash
git clone https://github.com/jeanlucaslima/HermitLog.git
cd HermitLog
pnpm install
pnpm dev
```

To fetch and validate assets:

```bash
# Fetch/update UUIDs
python scripts/check_uuids.py

# Fetch/download avatar and head renders
python scripts/fetch_avatars.py
```

---

## 🙏 Credits

- Avatars and heads rendered via [Crafatar](https://crafatar.com)
- HermitCraft videos and characters by their respective creators
- UI system based on [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)

---

## 📫 Contact

Created by [Jean Lucas](https://github.com/jeanlucaslima)
Ideas, feedback, or contributions? Open an issue or start a discussion!

---

## 📄 License

This project is open-source under the MIT License.