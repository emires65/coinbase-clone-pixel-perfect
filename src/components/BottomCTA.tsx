import { Button } from "@/components/ui/button"

const BottomCTA = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Need Help with Your Coinbase Account?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our support team is ready to assist you with payments, settlements, integrations, and more.
        </p>
        <Button variant="coinbase" size="lg">
          Contact Support Now
        </Button>
      </div>
    </section>
  )
}

export default BottomCTA