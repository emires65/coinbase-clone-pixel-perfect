import CoinbaseHeader from "@/components/CoinbaseHeader"
import Hero from "@/components/Hero"
import SupportSection from "@/components/SupportSection"
import StatsSection from "@/components/StatsSection"
import BottomCTA from "@/components/BottomCTA"
import { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    // Add JivoChat widget script
    const script = document.createElement('script')
    script.src = '//code.jivosite.com/widget/vg8WBJamcA'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <CoinbaseHeader />
      <Hero />
      <SupportSection />
      <StatsSection />
      <BottomCTA />
    </div>
  );
};

export default Index;
