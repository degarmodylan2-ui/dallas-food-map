import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import SiteHeader from "@/components/SiteHeader";
import { priceLabels, restaurants, slugify } from "@/data/restaurants";

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((spot) => spot.slug === slug);

  if (!restaurant) {
    return {};
  }

  return {
    title: `${restaurant.name} in ${restaurant.neighborhood}`,
    description: `${restaurant.name} is a ${priceLabels[restaurant.price]} ${restaurant.cuisine} spot in ${restaurant.neighborhood}. ${restaurant.summary}`,
  };
}

export default async function SpotPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((spot) => spot.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="spot-detail">
        <p className="eyebrow">{restaurant.neighborhood} restaurant</p>
        <h1>{restaurant.name}</h1>
        <div className="spot-meta">
          <span className={`tag price-${restaurant.price}`}>{priceLabels[restaurant.price]}</span>
          <Link className="tag tag-link" href={`/cuisine/${slugify(restaurant.cuisine)}`}>
            {restaurant.cuisine}
          </Link>
          <Link className="tag tag-link" href={`/restaurants/${slugify(restaurant.neighborhood)}`}>
            {restaurant.neighborhood}
          </Link>
        </div>
        <p>{restaurant.summary}</p>

        <AdSlot title="Sponsored" size="Featured Dallas dining partner" />
      </main>
    </>
  );
}
