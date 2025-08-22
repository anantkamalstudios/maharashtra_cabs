import { useRouter } from "next/router";
const topOffers = [
  {
    id: 1,
    slug: "mumbai-to-pune",
    image: "/assets/imgs/cars-listing/cars-listing-1/car-og-1.png",
    title: "Mumbai to Pune",
    subtitle: "Flat 20% Off on Round Trip",
    description:
      "Enjoy a comfortable ride with 20% off on your round trip from Mumbai to Pune!",
  },
];
export default function TopOfferDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const offer = topOffers.find((item) => item.slug === slug);

  if (!offer) return <p>Offer not found</p>;

  return (
    <div className="offer-details">
      <h1>{offer.title}</h1>
      <p>{offer.subtitle}</p>
      <img src={offer.image} alt={offer.title} />
      <p>{offer.description}</p>
    </div>
  );
}
