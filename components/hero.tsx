import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/10 via-background to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20">
          {'✨ New: Magical Powers System'}
        </div>
        <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl mb-6">
          {'Unleash the '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {'Magic'}
          </span>
          {' of the Sahara'}
        </h1>
        <p className="text-pretty text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {'Run, jump, and explore with magical powers in this fast-paced platformer inspired by Arabic mythology. Experience an adventure like never before.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 group">
            {'Start Your Adventure'}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 group bg-transparent">
            <Play className="mr-2 h-4 w-4" />
            {'Watch Trailer'}
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{'10K+'}</span>
            <span>{'Active Players'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{'4.8'}</span>
            <span>{'★ Rating'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{'50+'}</span>
            <span>{'Unique Powers'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
