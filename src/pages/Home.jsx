import React, { useEffect, useState } from "react";
import Hero1 from "./Hero1";
import Search1 from "../components/sections/Search1";
import Brand1 from "../components/sections/Brand1";
import Services1 from "../components/sections/Services1";
import Cta2 from "./Cta2";
import Faq from "../components/sections/Faq";
import Testimonials from "../components/sections/Testimonials";
import TopOffers from "../components/sections/TopOffers";
import WhyUs1 from "../components/sections/WhyUs1";
import TaxiPackage from "../components/sections/TaxiPackage";
import PopularRoutes from "../components/sections/PopularRoutes";
import Layout from "../components/layout/Layout";
import App from "../components/sections/App";
import axios from "axios";
import { useLoading } from "../context/LoadingContext";
import useHome from "../hooks/useHome";
import { RingLoader } from "react-spinners";

// https://maharashtracabs.com/maharashtracab_backend/api/cms/home
// https://teal-sparrow-187679.hostingersite.com/maharashtracabs/public
export default function Home() {
  const { data, loading, error } = useHome();

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <RingLoader size={120} color="#3583e8ff" />
      </div>
    );
  if (error) return <div>Failed to load data. Please try again.</div>;
  if (!data || Object.keys(data).length === 0) {
    return <div>No data available</div>;
  }
  const section1 = data?.section1[0];
  const topOffersRaw = data?.top_offer || [];
  const taxiPackagesRaw = data?.taxi_package || [];
  const easyBookingRaw = data?.easy_booking || [];
  const headerVisitsRaw = data?.top_place || [];
  const testimonialRaw = data?.testimonial || [];
  const faqRaw = data?.faq || [];
  const calciRaw = data?.rent_calculate || [];
 

  const topOffers = topOffersRaw
    .filter((item) => item.heading === null && item.title)
    .map((item) => ({
      ...item,
      slug: item.title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`,
    }));

  const taxiPackages = taxiPackagesRaw
    .filter((item) => item.title !== null || item.heading !== null)
    .filter(
      (item) =>
        (item.title && item.title.trim()) ||
        (item.heading && item.heading.trim())
    )
    .map((item) => {
      const resolvedTitle =
        item.title && item.title.trim()
          ? item.title
          : item.heading || "Package";
      const resolvedSubtitle = item.subtitle || item.paragraph || "";
      const resolvedImage = item.image
        ? `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`
        : undefined;
      return {
        ...item,
        title: resolvedTitle,
        subtitle: resolvedSubtitle,
        slug: resolvedTitle.toLowerCase().replace(/\s+/g, "-"),
        image: resolvedImage,
      };
    });

  const headerEasyBooking = easyBookingRaw.find(
    (item) => item.heading !== null
  );
  const easyBooking = easyBookingRaw
    .filter((item) => item.heading === null && item.title)
    .map((item) => ({
      ...item,
      image: `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`,
    }));

  const headerVisits = headerVisitsRaw.find((item) => item.heading !== null);
  const visits = headerVisitsRaw
    .filter((item) => item.heading === null && item.title)
    .map((item) => ({
      ...item,
      slug: item.slug || item.title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`,
    }));

  const headerTestimonialRaw = testimonialRaw.find(
    (item) => item.type === "header"
  );

  const testimonials = testimonialRaw
    .filter((item) => item.type === "testimonial" && item.title)

    .map((item) => ({
      ...item,
      slug: item.title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`,
    }));

  const faq = faqRaw.map((item) => ({
    ...item,
  }));

  const calci = calciRaw.map((item) => ({
    ...item,
  }));

  return (
    <Layout headerStyle={1}>
      <Hero1 section={section1} />
      <Search1 />
      <Services1 headerVisits={headerVisits} visits={visits} />
      {/* <Brand1 /> */}
      <TopOffers topOffers={topOffers} />
      <TaxiPackage taxiPackages={taxiPackages} />
      <WhyUs1 headerEasyBooking={headerEasyBooking} easyBooking={easyBooking} />
      <Cta2 calci={calci} />
      <Testimonials
        testimonials={testimonials}
        headerTestimonialRaw={headerTestimonialRaw}
      />
      <Faq faq={faq} />
      <PopularRoutes />
      <App />
    </Layout>
  );
}
