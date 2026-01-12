import { Link } from "react-router-dom";
import { getSiteSettings } from "@/data/site";
import { getImageUrl } from "@/lib/utils";

const CategorySection = () => {
  const { categories = [] } = getSiteSettings();

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
                <div className="aspect-square relative">
                  <img
                    src={getImageUrl(category.image)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="font-semibold text-primary-foreground mb-0.5">
                      {category.name}
                    </h3>
                    <p className="text-xs text-primary-foreground/80">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
