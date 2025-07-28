import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Welcome to Coinbase
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Buy, sell, and manage your crypto easily and securely.
        </p>
        <Button variant="coinbase" size="lg">
          Chat with Customer Support
        </Button>
      </div>
    </section>
  )
}

export default Hero