import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sahara Speedster
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {'Experience the magic of Arabic mythology in this fast-paced platformer. Run, jump, and explore with incredible magical powers.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{'Game'}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">{'Features'}</a></li>
              <li><a href="#solution" className="hover:text-foreground transition-colors">{'Why Play'}</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">{'Reviews'}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{'System Requirements'}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{'Support'}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{'Help Center'}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{'Community'}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{'Discord'}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{'Contact'}</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' Sahara Speedster. All rights reserved.'}
          </p>
          <p>
            {'Founder: '}
            <a href="mailto:mousa.soutari@gmail.com" className="hover:text-foreground transition-colors">
              {'mousa.soutari@gmail.com'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
