import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: 'Alex Rivers',
    role: 'Platformer Enthusiast',
    avatar: 'AR',
    rating: 5,
    comment: 'This game is absolutely amazing! The Arabic mythology is so unique and refreshing. The magical powers feel incredible to use.',
  },
  {
    name: 'Maya Chen',
    role: 'Speedrunner',
    avatar: 'MC',
    rating: 5,
    comment: 'The gameplay is fast, fluid, and incredibly satisfying. I can\'t stop playing! The speedrun mode is perfectly implemented.',
  },
  {
    name: 'Jordan Blake',
    role: 'Casual Gamer',
    avatar: 'JB',
    rating: 5,
    comment: 'Beautiful art style and engaging story. The level design is top-notch, and the boss fights are epic!',
  },
  {
    name: 'Priya Sharma',
    role: 'Content Creator',
    avatar: 'PS',
    rating: 5,
    comment: 'My viewers love watching me play this! The combination of challenging platforming and magical abilities is genius.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {'What Players Are Saying'}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            {'Join thousands of players experiencing the magic of Sahara Speedster'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-accent/20">
                    <AvatarImage src={`https://api.dicebear.com/7/initials/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                    <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.comment}"`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
