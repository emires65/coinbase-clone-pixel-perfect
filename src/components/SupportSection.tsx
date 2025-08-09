import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ShieldCheck, Plug } from "lucide-react"

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
          <Card className="h-full">
            <CardHeader className="space-y-3">
              <MessageCircle className="size-6 text-primary" aria-hidden />
              <CardTitle className="text-xl text-foreground">Live Chat Support</CardTitle>
              <p className="text-muted-foreground">
                Get instant help through our live chat widget. Available 24/7 for urgent issues.
              </p>
            </CardHeader>
            <CardContent>
              <Button variant="coinbase-outline" className="w-full" onClick={() => (window as any).jivo_api?.open?.()}>
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="space-y-3">
              <ShieldCheck className="size-6 text-primary" aria-hidden />
              <CardTitle className="text-xl text-foreground">Account & Verification</CardTitle>
              <p className="text-muted-foreground">
                Get help with account access, verification, and security reviews.
              </p>
            </CardHeader>
            <CardContent>
              <Button variant="coinbase-outline" className="w-full" onClick={() => (window as any).jivo_api?.open?.()}>
                Contact Now
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="space-y-3">
              <Plug className="size-6 text-primary" aria-hidden />
              <CardTitle className="text-xl text-foreground">Integrations & API</CardTitle>
              <p className="text-muted-foreground">
                Assistance with Coinbase Commerce integrations, webhooks, and API errors.
              </p>
            </CardHeader>
            <CardContent>
              <Button variant="coinbase-outline" className="w-full" onClick={() => (window as any).jivo_api?.open?.()}>
                Get Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default SupportSection