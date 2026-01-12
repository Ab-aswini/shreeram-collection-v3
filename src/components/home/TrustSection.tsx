import { CheckCircle2, ShieldCheck, Wallet, MapPin } from "lucide-react";

const trustFeatures = [
  {
    icon: CheckCircle2,
    title: "Quality Checked",
    description: "Every product inspected for quality",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    description: "Best value for your money",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2010",
    description: "Serving our community with pride",
  },
  {
    icon: MapPin,
    title: "Local Store",
    description: "Visit us at Main Market Road",
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title text-primary-foreground">Why Choose Shreeram Collection?</h2>
          <p className="text-primary-foreground/70">Your trusted neighborhood clothing store</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
