// app/hermit/[slug]/page.tsx
import { notFound, redirect } from "next/navigation"
import Image from "next/image"
import { hermits } from "@/data/hermits"
import type { Metadata } from "next"


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const hermit = hermits.find(h => h.slugs.includes(slug.toLowerCase()))
  if (!hermit) return { title: "Hermit Not Found" }

  return {
    title: hermit.name,
    icons: {
      icon: `/avatars/heads/128/${hermit.name}.png`,
    },
  }
}

export function generateStaticParams() {
  return hermits.flatMap(h => h.slugs.map(slug => ({ slug })))
}

// Must use async function with Promise-style `params`
export default async function HermitPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const hermit = hermits.find(h => h.slugs.includes(slug.toLowerCase()))

  if (!hermit) return notFound()

  const canonicalSlug = hermit.slugs[0].toLowerCase()
  if (slug.toLowerCase() !== canonicalSlug) {
    redirect(`/hermit/${canonicalSlug}`)
  }

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Image
          src={`/avatars/faces/128/${hermit.avatar}`}
          alt={hermit.name}
          width={96}
          height={96}
          className="rounded-md border"
        />
        <Image
          src={`/avatars/heads/128/${hermit.name}.png`}
          alt={`${hermit.name} Head`}
          width={96}
          height={96}
          className="rounded-md border"
        />
        <div>
          <h1 className="text-2xl font-bold">{hermit.name}</h1>
          <p className="text-sm text-muted-foreground">
            Status: <span className="capitalize">{hermit.status}</span>
          </p>
        </div>
      </div>

      <section className="space-y-2">
        <p><strong>Username:</strong> {hermit.username}</p>
        <p><strong>UUID:</strong> {hermit.uuid}</p>
        <p><strong>Joined in Season:</strong> {hermit.joinedInSeason}</p>
        {hermit.leftInSeason && <p><strong>Left in Season:</strong> {hermit.leftInSeason}</p>}
        <p><strong>Active Seasons:</strong> {hermit.seasonsActive.join(", ")}</p>
        <p>
          <a
            href={`https://www.youtube.com/channel/${hermit.channelId}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Channel
          </a>
        </p>
      </section>
    </main>
  )
}
