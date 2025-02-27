import { getProductImages, getProducts } from "@/apis/product";
import About from "@/sections/about";
import Banner from "@/sections/banner";
import ProductList from "@/sections/product-list";

export default async function Home() {
  const products = await getProducts()
  const productImages = await getProductImages()

  return (
    <div className="space-y-16 mb-4">
      <Banner />
      <About />
      <ProductList
        products={products.data}
        productImages={productImages.data} />
    </div>
  );
}
