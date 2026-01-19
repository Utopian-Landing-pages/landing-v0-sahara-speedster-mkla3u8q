import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Gem, Rocket, Zap, Map, Crown } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Magical Powers',
    description: 'Harness ancient Arabic magic',
    details: 'Discover and master unique abilities inspired by Middle Eastern mythology. Control fire, summon sandstorms, and unlock mystical powers.',
  },
  {
    icon: Gem,
    title: 'Stunning Visuals',
    description: 'Explore vibrant desert worlds',
    details: 'Immerse yourself in beautifully crafted environments with detailed Arabic-inspired art and mesmerizing animations.',
  },
  {
    icon: Rocket,
    title: 'Fast-Paced Action',
    description: 'Thrilling platforming gameplay',
    details: 'Test your skills with challenging levels, precision jumps, and exciting boss battles that keep you on the edge.',
  },
  {
    icon: Map,
    title: 'Epic Exploration',
    description: 'Vast interconnected worlds',
    details: 'Journey through ancient ruins, mystical oases, and hidden caves. Discover secrets and unlock new areas.',
  },
  {
    icon: Zap,
    title: 'Dynamic Combat',
    description: 'Engage in magical battles',
    details: 'Combine your powers in creative ways to defeat mythical creatures and powerful bosses from Arabic folklore.',
  },
  {
    icon: Crown,
    title: 'Rich Storyline',
    description: 'Experience ancient legends',
    details: 'Uncover the mysteries of a forgotten civilization and restore balance to the Sahara in an epic narrative.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {'Key Features'}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            {'Everything you need for an unforgettable adventure through the magical Sahara'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-2 hover:border-accent/50 transition-colors group">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
