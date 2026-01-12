import siteSettings from '../content/site-settings.json';
import promotions from '../content/promotions.json';

export interface SiteSettings {
    brandName: string;
    whatsappNumber: string;
    seoTitle: string;
    seoDescription: string;
    contactPhone: string;
    contactEmail: string;
    contactAddress: string;
    contactMapUrl: string;
    socialLinks: string[];
    heroImage: string;
    categories: {
        id: string;
        name: string;
        description: string;
        image: string;
    }[];
}

export interface Promotion {
    enablePromotion: boolean;
    promotionText: string;
    promotionType: 'banner' | 'popup';
}

const defaultSettings: SiteSettings = {
    brandName: "Shreeram Collection",
    whatsappNumber: "",
    seoTitle: "Shreeram Collection",
    seoDescription: "Fashion for Everyone",
    contactPhone: "",
    contactEmail: "",
    contactAddress: "",
    contactMapUrl: "",
    socialLinks: [],
    heroImage: "",
    categories: []
};

export const getSiteSettings = (): SiteSettings => {
    // Safety check: ensure siteSettings exists, otherwise return defaults
    if (!siteSettings) return defaultSettings;
    return { ...defaultSettings, ...siteSettings } as SiteSettings;
};

export const getPromotion = (): Promotion => {
    return promotions as Promotion;
};
