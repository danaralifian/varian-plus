import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTo(id?: string) {
  const hash = window.location.hash || id;
  if (hash) {
    const element = document.querySelector(hash) as HTMLElement;
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    }
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
