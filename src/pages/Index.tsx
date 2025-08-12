
import MarketplaceHeader from "@/components/MarketplaceHeader";
import HeroBanner from "@/components/HeroBanner";
import HowItWorks from "@/components/HowItWorks";
import FlashDeals from "@/components/FlashDeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <HeroBanner />
      <HowItWorks />
      <FlashDeals />
    </div>
  );
};

export default Index;
