export default function Hero1({ section }) {
  if (!section) return null;
  return (
    <>
      <div
        className="bg-shape z-0"
        style={{
          backgroundImage: `url(https://maharashtracabs.com/maharashtracab_backend/public/${section.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      <section className="box-section block-banner-home1 position-relative">
        <div className="container position-relative z-1">
          <p className="text-primary text-md-bold wow fadeInUp">
            {section.title}
          </p>
          <h1 className="color-white mb-35 wow fadeInUp">
            {section.sub_title}
          </h1>
          <ul className="list-ticks-green d-none d-md-block">
            <li className="wow fadeInUp" data-wow-delay="0.1s">
              High quality at a low cost.
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.2s">
              Premium services
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.4s">
              24/7 roadside support.
            </li>
          </ul>
        </div>
        <div className="bg-shape z-0" />
      </section>
    </>
  );
}
