
import React from 'react';
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getImageUrl } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { getSiteSettings } from "@/data/site";

interface CartDrawerProps {
    children?: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
    const { items, removeFromCart, updateQuantity, subtotal, cartCount } = useCart();
    const { whatsappNumber } = getSiteSettings();

    const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

    const generateOrderMessage = () => {
        let message = "Hi! I would like to place an order from your website:\n\n";
        items.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n   Size: ${item.size}, Color: ${item.color}\n   Qty: ${item.quantity} x ${formatPrice(item.price)}\n\n`;
        });
        message += `*Total Amount: ${formatPrice(subtotal)}*`;
        return encodeURIComponent(message);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                {children || (
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                )}
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-hidden mt-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground/30" />
                            <p className="text-muted-foreground">Your cart is empty.</p>
                            <SheetTrigger asChild>
                                <Button variant="outline">Continue Shopping</Button>
                            </SheetTrigger>
                        </div>
                    ) : (
                        <ScrollArea className="h-[calc(100vh-250px)] pr-4">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                                            <img
                                                src={getImageUrl(item.image)}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium">
                                                <h3 className="line-clamp-2 pr-4 text-sm">{item.name}</h3>
                                                <p className="flex-shrink-0 text-sm">{formatPrice(item.price * item.quantity)}</p>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {item.size} • {item.color}
                                            </p>

                                            <div className="flex flex-1 items-end justify-between text-sm mt-2">
                                                <div className="flex items-center gap-1 border rounded-md">
                                                    <button
                                                        className="p-1 hover:bg-muted"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-6 text-center text-xs ml-1 mr-1">{item.quantity}</span>
                                                    <button
                                                        className="p-1 hover:bg-muted"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="font-medium text-destructive hover:text-destructive/80"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t pt-4">
                        <div className="flex justify-between py-4 text-base font-semibold">
                            <span>Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${generateOrderMessage()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full" size="lg">
                                Checkout on WhatsApp
                            </Button>
                        </a>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
