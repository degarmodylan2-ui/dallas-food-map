import { getCuisines, getNeighborhoods, restaurants, slugify } from "@/data/restaurants";

const baseUrl = "https://dallasfoodmap.com";

export const dynamic = "force-static";

export default function sitemap() {
  const staticPages = [
    "",
    "/cheap-eats-dallas",
    "/best-bbq-dallas",
    "/date-night-restaurants-dallas",
  ];

  const neighborhoodPages = getNeighborhoods().map(
    (neighborhood) => `/restaurants/${slugify(neighborhood)}`,
  );

  const cuisinePages = getCuisines().map((cuisine) => `/cuisine/${slugify(cuisine)}`);

  const restaurantPages = restaurants.map((restaurant) => `/spot/${restaurant.slug}`);

  return [...staticPages, ...neighborhoodPages, ...cuisinePages, ...restaurantPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
