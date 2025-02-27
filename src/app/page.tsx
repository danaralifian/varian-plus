import { getProductImages, getProducts } from "@/apis/product";
import About from "@/components/about";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts()
  const productImages = await getProductImages()

  return (
    <div className="space-y-10 mb-4">
      <Banner />
      <section className="space-y-10">
        <About />
        <ProductList
          products={products.data}
          productImages={productImages.data} />
      </section>
    </div>
  );
}
