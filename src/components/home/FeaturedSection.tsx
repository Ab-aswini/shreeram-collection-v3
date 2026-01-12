import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const FeaturedSection = () => {
  const featuredProducts = getFeaturedProducts() || [];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-2">
              <Heart className="w-4 h-4 fill-current" />
              Customer Favorites
            </div>
            <h2 className="section-title">Most Loved Products</h2>
            <p className="section-subtitle">Trusted choices by our valued customers</p>
          </div>
          <Link to="/products/women">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
