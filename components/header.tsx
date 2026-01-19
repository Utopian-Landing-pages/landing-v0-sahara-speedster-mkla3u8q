import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sahara Speedster
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </a>
          <a href="#solution" className="text-sm font-medium transition-colors hover:text-primary">
            Why Play
          </a>
          <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Reviews
          </a>
          <Button size="sm" className="ml-2">
            Play Now
          </Button>
        </nav>
        <Button size="sm" className="md:hidden">
          Play Now
        </Button>
      </div>
    </header>
  )
}
