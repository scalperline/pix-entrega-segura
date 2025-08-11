
import MarketplaceHeader from "@/components/MarketplaceHeader";
import HeroBanner from "@/components/HeroBanner";
import FlashDeals from "@/components/FlashDeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <HeroBanner />
      <FlashDeals />
    </div>
  );
};

export default Index;
