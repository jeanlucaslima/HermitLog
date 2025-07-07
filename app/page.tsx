// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 prose dark:prose-invert">
      <h1>Welcome to HermitLog</h1>

      <p>
        <strong>HermitLog</strong> is a fan-made archive and visual tracker of HermitCraft, the beloved Minecraft SMP
        server. Explore timelines, member activity, season history, and more — all with a focus on clean UX and smart
        frontend architecture.
      </p>

      <p className="text-sm italic text-muted-foreground">
        🚧 This site is a work-in-progress. Features, design, and content are actively evolving.
      </p>

      <h2>Quick Links</h2>
      <ul>
        <li><Link href="/hermit">Hermits List</Link></li>
        <li><Link href="/timeline">Activity Timeline</Link></li>
        <li><Link href="/seasons">Season Overview</Link></li>
        <li><Link href="/about">About this Project</Link></li>
      </ul>

      <p>
        Built with <code>Next.js</code>, <code>ISR</code>, and <code>shadcn/ui</code>, HermitLog is also a playground for
        experimenting with how we visualize long-running creative collaborations on the web.
      </p>

      <p>
        Visit the <a href="https://hermitrecap.com" target="_blank" rel="noreferrer">Hermit Recap</a> for curated weekly updates.
      </p>

      <p>
        <Link href="/hermits">
          <Button>View All Hermits →</Button>
        </Link>
      </p>
    </main>
  )
}
