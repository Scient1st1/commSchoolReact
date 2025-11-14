import Image from "next/image";
import Banner from "@/components/banner/Banner";
import ProductList from "@/components/product/ProductList";
import Testimonials from "@/components/testimonials/Testimonials";
// import { NewArrivals } from "@/data/newArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductList title="New Arrivals" />
      <Testimonials />
    </>
  );
}
