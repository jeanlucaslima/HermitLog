// app/hermit/[slug]/page.tsx

import { notFound, redirect } from "next/navigation"
import { hermits } from "@/data/hermits"
import Image from "next/image"

type Props = {
  params: { slug: string }
}

export default function HermitPage({ params }: Props) {
  const slug = params.slug.toLowerCase()
  const hermit = hermits.find(h => h.slugs.includes(slug))

  if (!hermit) return notFound()

  const canonicalSlug = hermit.slugs[0].toLowerCase()
  if (slug !== canonicalSlug) {
    redirect(`/hermit/${canonicalSlug}`)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <div className="flex items-center space-x-4">
        <Image
          src={`/avatars/${hermit.avatar}`}
          alt={hermit.name}
          width={64}
          height={64}
          className="rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{hermit.name}</h1>
          <p className="text-sm text-muted-foreground">
            Minecraft: <span className="font-mono">{hermit.username}</span>
          </p>
          <p className="text-sm">
            Status: <span className="capitalize">{hermit.status}</span>
          </p>
        </div>
      </div>

      <div className="text-sm">
        <p>
          Joined in season <strong>{hermit.joinedInSeason}</strong>
        </p>
        <p>
          Active seasons:{" "}
          <span className="font-mono">{hermit.seasonsActive.join(", ")}</span>
        </p>
        {hermit.leftInSeason && (
          <p>
            Left in season <strong>{hermit.leftInSeason}</strong>
          </p>
        )}
      </div>
    </div>
  )
}
