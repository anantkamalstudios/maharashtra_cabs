import Layout from "@/components/layout/Layout";
import App from "@/components/sections/App";
import Banners from "@/components/sections/Banners";
import Blog1 from "@/components/sections/Blog1";
import Brand1 from "@/components/sections/Brand1";
import CarReview1 from "@/components/sections/CarReview1";
import CarsListing1 from "@/components/sections/CarsListing1";
import CarsListing2 from "@/components/sections/CarsListing2";
import Categories1 from "@/components/sections/Categories1";
import Cta1 from "@/components/sections/Cta1";
import Cta2 from "@/components/sections/Cta2";
import Cta3 from "@/components/sections/Cta3";
import Faq from "@/components/sections/Faq";
import Hero1 from "@/components/sections/Hero1";
import Search1 from "@/components/sections/Search1";
import Services1 from "@/components/sections/Services1";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs1 from "@/components/sections/WhyUs1";
import Faqs from "./faqs/page";
import PopularRoutes from "@/components/sections/PopularRoutes";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {/* Hero Section */}
        <Hero1 />
        {/* Search */}
        <Search1 />
        {/* brands slider */}
        <Brand1 />
        {/* Top Offers */}
        <CarsListing1 />
        {/* Taxi Packages */}
        <Categories1 />
        {/* Super Easy Booking */}
        <WhyUs1 />
        {/* Top Places */}
        <Services1 />
        {/* <Cta1 /> */}
        {/* Loan Calculator */}
        <Cta2 />
        {/* <CarsListing2 /> */}
        {/* <Cta3 /> */}
        {/* <Banners /> */}
        <Testimonials />
        {/* <CarReview1 /> */}
        {/* <Blog1 /> */}
        <Faq />

        <PopularRoutes />
        {/* App */}
        <App />
      </Layout>
    </>
  );
}
