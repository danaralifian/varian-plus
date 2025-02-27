import About from "@/components/about";
import Banner from "@/components/banner";
import ProductCard from "@/components/product-card";
import ProductList from "@/components/product-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 mb-4">
      <Banner />
      <div className="container">
        <section className="space-y-10">
          <About />
          <ProductList />
        </section>
      </div>
    </div>
  );
}
