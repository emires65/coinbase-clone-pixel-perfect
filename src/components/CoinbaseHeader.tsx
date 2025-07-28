import { Button } from "@/components/ui/button"

const CoinbaseHeader = () => {
  return (
    <header className="w-full px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-foreground">COINBASE</h1>
        </div>
        <Button variant="coinbase" size="sm">
          Customer Support
        </Button>
      </div>
    </header>
  )
}

export default CoinbaseHeader