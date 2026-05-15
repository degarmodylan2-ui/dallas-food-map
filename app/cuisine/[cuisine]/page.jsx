import { notFound } from "next/navigation";
import DirectoryPage from "@/components/DirectoryPage";
import { getCuisines, restaurants, slugify } from "@/data/restaurants";

export function generateStaticParams() {
  return getCuisines().map((cuisine) => ({
    cuisine: slugify(cuisine),
  }));
}

export async function generateMetadata({ params }) {
  const { cuisine: cuisineSlug } = await params;
  const cuisine = getCuisineFromSlug(cuisineSlug);

  if (!cuisine) {
    return {};
  }

  return {
    title: `Best ${cuisine} Restaurants in Dallas`,
    description: `Find Dallas ${cuisine} restaurants on an interactive map with filters for price and neighborhood.`,
  };
}

export default async function CuisinePage({ params }) {
  const { cuisine: cuisineSlug } = await params;
  const cuisine = getCuisineFromSlug(cuisineSlug);

  if (!cuisine) {
    notFound();
  }

  const cuisineRestaurants = restaurants.filter((spot) => spot.cuisine === cuisine);

  return (
    <DirectoryPage
      eyebrow={`Dallas ${cuisine} guide`}
      title={`Best ${cuisine} restaurants in Dallas`}
      description={`Explore curated ${cuisine} restaurants across Dallas and nearby neighborhoods, with map pins and price filters.`}
      restaurants={cuisineRestaurants}
    />
  );
}

function getCuisineFromSlug(slug) {
  return getCuisines().find((cuisine) => slugify(cuisine) === slug);
}
