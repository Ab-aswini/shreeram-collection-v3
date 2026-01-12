import { getPromotion } from "@/data/site";
import { X } from "lucide-react";
import { useState } from "react";

const PromotionBanner = () => {
    const { enablePromotion, promotionText } = getPromotion();
    const [isVisible, setIsVisible] = useState(true);

    if (!enablePromotion || !isVisible) return null;

    return (
        <div className="bg-primary text-primary-foreground relative px-4 py-2 text-center text-sm font-medium z-[60]">
            <p>{promotionText}</p>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="Close promotion"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default PromotionBanner;
