import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TrustSection from "@/components/home/TrustSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection />
      <FeaturedSection />
      <TrustSection />
    </Layout>
  );
};

export default Index;
