import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(path: string | undefined | null) {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  const baseUrl = import.meta.env.BASE_URL; // Now "/"

  // If path already starts with base url, return it
  if (path.startsWith(baseUrl) && baseUrl !== "/") return path;

  // If path starts with slash, just return it (since we are at root)
  if (path.startsWith("/")) {
    return path;
  }

  return path;
}
