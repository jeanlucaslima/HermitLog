// app/hermits/page.tsx
import Link from "next/link"
import Image from "next/image"
import { hermits } from "@/data/hermits"

export default function HermitsPage() {
  const activeHermits = hermits.filter(h => h.status === "active")
  const allHermits = [...hermits].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Hermit Directory</h1>
      <p className="text-muted-foreground">
        Showing all known Hermits across seasons. Click on a head to view more details.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Active Hermits</h2>
        <div className="flex flex-wrap gap-4">
          {activeHermits.map(hermit => (
            <Link key={hermit.uuid} href={`/hermit/${hermit.slugs[0]}`} className="text-center">
              <Image
                src={`/avatars/heads/128/${hermit.avatar}`}
                alt={hermit.name}
                width={64}
                height={64}
                className="mx-auto rounded-md border"
              />
              <p className="text-sm mt-1 text-center">{hermit.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">All Hermits</h2>
        <div className="flex flex-wrap gap-4">
          {allHermits.map(hermit => (
            <Link key={hermit.uuid} href={`/hermit/${hermit.slugs[0]}`} className="text-center">
              <Image
                src={`/avatars/heads/128/${hermit.avatar}`}
                alt={hermit.name}
                width={64}
                height={64}
                className={`mx-auto rounded-md border ${hermit.status !== "active" ? "opacity-40 grayscale" : ""}`}
              />
              <p className="text-sm mt-1 text-center">{hermit.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
