import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  'Unique Arabic mythology setting rarely seen in games',
  'Fluid, responsive controls that feel amazing',
  'Stunning hand-crafted pixel art with modern effects',
  'Over 60 challenging levels across 6 unique worlds',
  'Speedrun mode with global leaderboards',
  'Regular updates with new content and powers',
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {'Why Sahara Speedster?'}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground mb-8 leading-relaxed">
              {'Tired of the same old platformers? Sahara Speedster offers a fresh experience with unique Arabic-inspired magic, stunning visuals, and fast-paced action. Explore a world you\'ve never seen before.'}
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="text-base px-8">
              {'Download Now'}
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 p-8 backdrop-blur">
              <div className="h-full w-full rounded-xl bg-card/50 backdrop-blur flex items-center justify-center border-2 border-accent/20">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">{'🏜️'}</div>
                  <p className="text-2xl font-bold">{'Experience the Magic'}</p>
                  <p className="text-muted-foreground">{'Available on PC, Mac & Linux'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
