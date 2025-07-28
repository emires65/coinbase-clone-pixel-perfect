import { Button } from "@/components/ui/button"

const SupportSection = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Help When You Need It
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Our dedicated support team is here to help you with all your Coinbase merchant questions and issues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Live Chat Support</h3>
            <p className="text-muted-foreground">
              Get instant help through our live chat widget. Available 24/7 for urgent issues.
            </p>
            <Button variant="coinbase-outline" className="w-full">
              Start Chat
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Direct Support</h3>
            <p className="text-muted-foreground">
              Speak directly with our support specialists for complex issues and account help.
            </p>
            <Button variant="coinbase-outline" className="w-full">
              Contact Now
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">24/7 Availability</h3>
            <p className="text-muted-foreground">
              Get help anytime, day or night. Our support team is always ready to assist you.
            </p>
            <Button variant="coinbase-outline" className="w-full">
              Get Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection