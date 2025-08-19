import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import MobileMenu from "./MobileMenu";
import Offcanvas from "./Offcanvas";
import WhatsAppButton from "../WhatsAppButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isOffcanvas, setOffcanvas] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  const handleOffcanvas = () => {
    setOffcanvas(!isOffcanvas);
    !isOffcanvas
      ? document.body.classList.add("canvas-menu-active")
      : document.body.classList.remove("canvas-menu-active");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="top" />

      {!scroll && (
        <Header
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffcanvas={isOffcanvas}
          handleOffcanvas={handleOffcanvas}
        />
      )}

      {scroll && (
        <Header2
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffcanvas={isOffcanvas}
          handleOffcanvas={handleOffcanvas}
        />
      )}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <Offcanvas isOffcanvas={isOffcanvas} handleOffcanvas={handleOffcanvas} />

      <main className="main background-body">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {!footerStyle && <Footer />}
      {footerStyle === 1 && <Footer />}
      {footerStyle === 2 && <Footer />}

      <WhatsAppButton />
      <BackToTop target="#top" />
    </>
  );
}
