// app/about/page.tsx
export default function AboutPage() {
  return (
    <>
      <main className="prose dark:prose-invert max-w-3xl mx-auto p-6">
        <h1>About HermitLog</h1>

        <p>
          <strong>HermitLog</strong> is a non-official fan website created to document and explore the HermitCraft
          universe. It offers structured information about Hermits, seasons, activity timelines, and more.
        </p>

        <p>
          This project is not affiliated with HermitCraft or any of its members. All Minecraft assets and character
          likenesses belong to Mojang/Microsoft and the respective creators.
        </p>

        <h2>Why HermitLog Exists</h2>
        <p>
          HermitLog is a passion project to improve front-end architecture and experiment with web features such as
          <strong>Incremental Static Regeneration (ISR)</strong> via Next.js. It also serves as a sandbox for building
          cool data-driven UIs around long-running collaborative stories.
        </p>

        <h2>Credits</h2>
        <ul>
          <li>Minecraft avatars and head renders from <a href="https://crafatar.com" target="_blank" rel="noreferrer">Crafatar</a></li>
          <li>Data compiled manually and programmatically using public APIs</li>
          <li>UI built with <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">shadcn/ui</a></li>
          <li>Codebase on <a href="https://github.com/jeanlucaslima/HermitLog" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>

        <h2>Related Projects</h2>
        <p>
          If you enjoy HermitLog, check out the <a href="https://hermitrecap.com" target="_blank" rel="noreferrer">Hermit Recap</a>
          site for curated weekly updates and community highlights.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, ideas, or contributions? Reach out via GitHub or ping the creator, Jean Lucas, through your favorite tech channel.
        </p>
      </main>
    </>
  )
}
