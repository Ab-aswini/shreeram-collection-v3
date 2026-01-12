import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories, productImages } from "@/data/products";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductListing = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  const categoryInfo = categories.find(c => c.id === category);
  const categoryImage = category ? productImages[category as keyof typeof productImages] : null;

  return (
    <Layout>
      {/* Category Header */}
      <section className="relative bg-secondary py-8 md:py-12 overflow-hidden">
        {categoryImage && (
          <div className="absolute inset-0 opacity-10">
            <img 
              src={categoryImage} 
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl">{categoryInfo?.icon || '👕'}</span>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {categoryInfo?.name || 'All Products'}
              </h1>
              <p className="text-muted-foreground">{categoryInfo?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {products.length} products found
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl block mb-4">📦</span>
              <h2 className="font-display text-2xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground">Check back soon for new arrivals!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductListing;
