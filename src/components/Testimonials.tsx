import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ava R.",
    role: "Merchant",
    quote:
      "Outstanding support! The live chat solved my issue in minutes and followed up to be sure everything worked.",
  },
  {
    name: "Daniel K.",
    role: "Pro Trader",
    quote:
      "Fast, friendly, and knowledgeable. Easily the best customer service experience I’ve had this year.",
  },
  {
    name: "Sofia M.",
    role: "Business Owner",
    quote:
      "24/7 chat is a game changer. They helped me with payments and account verification super quickly.",
  },
]

const Stars = () => (
  <div className="flex gap-1 text-primary" aria-hidden>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="size-4 fill-primary text-primary" />
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section aria-label="Customer Support Reviews" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Support Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from customers who reached out to our 24/7 support team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="h-full">
              <CardHeader>
                <Stars />
                <CardTitle className="text-xl text-foreground">{t.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
