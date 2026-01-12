import { Link } from "react-router-dom";
import { Product, productImages } from "@/data/products";
import { getImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number | null) => {
    if (price === null) return "Call for Price";
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Get the product image or fallback to category image
  const productImage = product.images[0] || productImages[product.category];

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden card-hover">
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Product Image */}
        <img
          src={getImageUrl(productImage)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="badge-new">NEW</span>
          )}
          {product.isFeatured && !product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
              POPULAR
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/product/${product.id}`}>
            <Button variant="hero" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2 capitalize">{product.fabric}</p>
        <div className="flex items-center justify-between">
          <span className={`font-bold ${product.price ? 'text-primary text-lg' : 'text-muted-foreground text-sm'}`}>
            {formatPrice(product.price)}
          </span>
          {product.colors.length > 1 && (
            <span className="text-xs text-muted-foreground">
              {product.colors.length} colors
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
