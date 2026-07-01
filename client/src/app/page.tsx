import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <div className="relative aspect-[2/1] mb-12">
        <Image src="/featuredPrd.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
