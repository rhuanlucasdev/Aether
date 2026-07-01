import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-[2/1] mb-12">
        <Image src="/featuredPrd.png" alt="Featured Product" fill />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;
