// components/footer.tsx
"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t mt-20 px-6 py-10 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Branding and Description */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">HermitLog</h3>
          <p className="leading-relaxed">
            A fan-made archive of HermitCraft activity. Built for the community — not affiliated with Mojang or HermitCraft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/hermits">Hermits List</Link></li>
            <li><Link href="/about">About</Link></li>
            {/* Placeholder/future links */}
            <li><Link href="/seasons">Seasons Overview</Link></li>
            <li><Link href="/timeline">Activity Timeline</Link></li>
          </ul>
        </div>

        {/* External Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a href="https://hermitrecap.com" target="_blank" rel="noreferrer">
                Hermit Recap
              </a>
            </li>
            <li>
              <a href="https://crafatar.com" target="_blank" rel="noreferrer">
                Crafatar Avatars
              </a>
            </li>
            <li>
              <a href="https://github.com/jeanlucaslima/HermitLog" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jean Lucas. All rights reserved.
      </div>
    </footer>
  )
}
