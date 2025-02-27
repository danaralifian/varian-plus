import { fetcher } from "@/lib/fetcher";
import IProduct from "@/models/product";
import IProductImage from "@/models/product-image";

export const getProducts = async () =>
  fetcher<IProduct[]>("/product.json", { method: "GET" });

export const getProductImages = async () =>
  fetcher<IProductImage[]>("/image.json", { method: "GET" });
