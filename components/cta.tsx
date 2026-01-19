import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary-foreground">
              {'Ready to Begin Your Adventure?'}
            </h2>
            <p className="text-pretty text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {'Join thousands of players and discover the magic of Sahara Speedster. Your epic journey through Arabic mythology awaits!'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-base px-8 group">
                {'Download Free Demo'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                {'Buy Full Game - $14.99'}
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              {'Available on Steam, Epic Games Store, and itch.io'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
