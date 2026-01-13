import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductById, productImages } from "@/data/products";
import { getSiteSettings } from "@/data/site";
import { getImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const { addToCart } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <span className="text-6xl block mb-4">😕</span>
          <h1 className="font-display text-2xl font-semibold mb-2">Product not found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number | null) => {
    if (price === null) return "Call for Price";
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const { whatsappNumber, contactPhone } = getSiteSettings();

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in "${product.name}" (₹${product.price}). Can you share more details?`
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!product) return;

    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    if (!selectedColor && product.colors.length > 0) {
      toast.error("Please select a color");
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price || 0,
      image: displayImage,
      size: selectedSize,
      color: selectedColor || "As shown",
      quantity: 1,
    });
  };

  // Use selected image if available, otherwise default to first image or category fallback
  const displayImage = selectedImage || product.images[0] || productImages[product.category];

  return (
    <Layout>
      <div className="container-custom py-6 md:py-10">
        {/* Breadcrumb */}
        <Link
          to={`/products/${product.category}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/20">
              <img
                src={getImageUrl(displayImage)}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 badge-new text-sm">NEW ARRIVAL</span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${displayImage === img ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-primary/50"
                      }`}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                {product.category} • {product.fabric}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <p className={`text-2xl font-bold ${product.price ? 'text-primary' : 'text-muted-foreground'}`}>
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Available Sizes */}
            <div>
              <h3 className="font-semibold mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary hover:text-primary"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Colors */}
            <div>
              <h3 className="font-semibold mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg text-sm border transition-colors ${selectedColor === color
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent bg-secondary hover:bg-secondary/80"
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-3">Product Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  Premium {product.fabric} fabric
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  Quality assured product
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  Easy care & maintenance
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={handleAddToCart} size="xl" className="w-full gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl" className="w-full gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Inquire on WhatsApp
                </Button>
              </a>
              <a href={`tel:${contactPhone}`}>
                <Button variant="outline" size="xl" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
