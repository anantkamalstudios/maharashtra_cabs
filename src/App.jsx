import { Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import BlogList from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/layout/header/Header";
import BookARide from "./pages/BookARide";
import TopOfferDetails from "./pages/TopOfferDetails";
import TaxiPackages from "./pages/TaxiPackagesDetails";
import TaxiPackagesDetails from "./pages/TaxiPackagesDetails";
import TopPlacesDetails from "./pages/TopPlacesDetails";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import TermsNCondition from "./components/legals/TermsNCondition";
import CancellationPolicy from "./components/legals/CancellationPolicy";
import RefundNReturn from "./components/legals/RefundNReturn";
import Policies from "./components/legals/Policies";
import BookRideDetails from "./pages/BookRideDetails";
import BlogDetails from "./pages/BlogDetails";
import LocalCabs from "./pages/LocalCabs";

function App() {
  return (
    <>
      <PageLoader />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-offers/:slug" element={<TopOfferDetails />} />
        <Route path="/taxi-package/:slug" element={<TaxiPackagesDetails />} />
        <Route path="/visits/:slug" element={<TopPlacesDetails />} />
        <Route path="/book-a-ride" element={<BookARide />} />
        <Route path="/book-a-ride/:from-to" element={<BookRideDetails />} />
        <Route path="/local-cabs/:pickup" element={<LocalCabs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details/:slug" element={<BlogDetails />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/terms-and-conditions" element={<TermsNCondition />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/refund-and-return" element={<RefundNReturn />} />
        <Route path="/privacy-policy" element={<Policies />} />
      </Routes>
    </>
  );
}

export default App;
