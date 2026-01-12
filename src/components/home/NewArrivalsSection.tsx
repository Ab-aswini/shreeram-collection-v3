import { Link } from "react-router-dom";
import { getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewArrivalsSection = () => {
  const newArrivals = getNewArrivals() || [];

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-dark px-3 py-1 rounded-full text-sm font-medium mb-2">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Just In
            </div>
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">Fresh styles just added to our collection</p>
          </div>
          <Link to="/products/men">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
          {newArrivals.map((product) => (
            <div key={product.id} className="min-w-[260px] sm:min-w-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
