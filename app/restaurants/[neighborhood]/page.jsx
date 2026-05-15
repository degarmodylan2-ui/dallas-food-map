import { notFound } from "next/navigation";
import DirectoryPage from "@/components/DirectoryPage";
import EditorialSection from "@/components/EditorialSection";
import { getNeighborhoods, restaurants, slugify } from "@/data/restaurants";

export function generateStaticParams() {
  return getNeighborhoods().map((neighborhood) => ({
    neighborhood: slugify(neighborhood),
  }));
}

export async function generateMetadata({ params }) {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhoodFromSlug(neighborhoodSlug);

  if (!neighborhood) {
    return {};
  }

  return {
    title: `Best Restaurants in ${neighborhood}`,
    description: `Find the best restaurants in ${neighborhood}, Dallas, with map filters for price, cuisine, and neighborhood dining.`,
  };
}

export default async function NeighborhoodPage({ params }) {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhoodFromSlug(neighborhoodSlug);

  if (!neighborhood) {
    notFound();
  }

  const neighborhoodRestaurants = restaurants.filter((spot) => spot.neighborhood === neighborhood);

  return (
    <DirectoryPage
      eyebrow={`${neighborhood} restaurant guide`}
      title={`Best restaurants in ${neighborhood}`}
      description={`Explore curated food spots in ${neighborhood}, with price filters, cuisines, map pins, and sponsor-ready placements.`}
      restaurants={neighborhoodRestaurants}
    >
      <NeighborhoodEditorial neighborhood={neighborhood} />
    </DirectoryPage>
  );
}

function getNeighborhoodFromSlug(slug) {
  return getNeighborhoods().find((neighborhood) => slugify(neighborhood) === slug);
}

function NeighborhoodEditorial({ neighborhood }) {
  const content = neighborhoodContent[neighborhood];

  if (!content) {
    return (
      <EditorialSection
        intro={[
          `${neighborhood} is part of the broader Dallas dining map, and this guide helps narrow the area by price, cuisine, and restaurant style.`,
          "Use the map to compare nearby spots, then keep browsing by cuisine or occasion if you want a more specific kind of meal.",
        ]}
        highlights={[
          {
            title: "Neighborhood Meals",
            body: "Find restaurants close to where you already are instead of searching the whole city.",
          },
          {
            title: "Price Filters",
            body: "Use the dollar filters to separate casual meals from special-occasion plans.",
          },
          {
            title: "Cuisine Hopping",
            body: "Filter by cuisine when you know what you want but need help choosing the exact spot.",
          },
        ]}
        links={[
          { href: "/cheap-eats-dallas", label: "Cheap Eats" },
          { href: "/date-night-restaurants-dallas", label: "Date Night Restaurants" },
          { href: "/best-bbq-dallas", label: "Best BBQ" },
        ]}
      />
    );
  }

  return <EditorialSection {...content} />;
}

const neighborhoodContent = {
  "Deep Ellum": {
    intro: [
      "Deep Ellum is one of Dallas's easiest neighborhoods for turning food into a full night out. The area works for barbecue, tacos, pizza, Japanese grilling, omakase, casual groups, and before-or-after-show meals.",
      "Because the neighborhood draws nightlife crowds, timing matters. Use the map to decide whether you want something quick and casual, a reservation-worthy meal, or a restaurant close to music venues and bars.",
    ],
    highlights: [
      {
        title: "Before a Show",
        body: "Deep Ellum works well for dinner before concerts, comedy, galleries, and late-night plans.",
      },
      {
        title: "Casual Groups",
        body: "Pizza, barbecue, tacos, and Japanese barbecue give groups several easy ways to agree on dinner.",
      },
      {
        title: "Destination Meals",
        body: "The neighborhood also has restaurants worth booking ahead, including refined tacos and omakase.",
      },
    ],
    faqs: [
      {
        question: "Is Deep Ellum better for casual food or special occasions?",
        answer:
          "Both. Deep Ellum has casual pizza, barbecue, and tacos, but it also has more polished reservation-driven dining.",
      },
      {
        question: "Is parking easy in Deep Ellum?",
        answer:
          "Parking can be busy during nightlife hours and events. Plan extra time if you are heading to dinner before a show.",
      },
      {
        question: "What cuisines is Deep Ellum best for?",
        answer:
          "The neighborhood is especially useful for barbecue, tacos, pizza, Japanese food, and casual group dining.",
      },
    ],
    links: [
      { href: "/best-bbq-dallas", label: "Best BBQ" },
      { href: "/cuisine/mexican", label: "Mexican Restaurants" },
      { href: "/date-night-restaurants-dallas", label: "Date Night Restaurants" },
    ],
  },
  "Bishop Arts": {
    intro: [
      "Bishop Arts is one of Dallas's best neighborhoods for walkable dining. The area makes it easy to pair dinner with coffee, drinks, dessert, shopping, or a low-pressure date night.",
      "The neighborhood has a useful mix: tacos, brunch, French bistro cooking, Italian reservations, seasonal restaurants, and casual spots that work well when you want to linger.",
    ],
    highlights: [
      {
        title: "Walkable Date Nights",
        body: "Bishop Arts is strong when you want dinner plus a stroll, drinks, coffee, or dessert nearby.",
      },
      {
        title: "Weekend Brunch",
        body: "The neighborhood has casual brunch options that work for visitors, groups, and relaxed weekend plans.",
      },
      {
        title: "Dinner Variety",
        body: "Italian, French, New American, tacos, and brunch spots sit close enough to compare quickly.",
      },
    ],
    faqs: [
      {
        question: "Is Bishop Arts good for visitors?",
        answer:
          "Yes. The neighborhood is compact, walkable, and has enough restaurants and shops to make it feel like a complete Dallas stop.",
      },
      {
        question: "Do Bishop Arts restaurants need reservations?",
        answer:
          "Some do, especially smaller date-night restaurants. Casual brunch and taco spots are usually easier, but weekends can still be busy.",
      },
      {
        question: "What kind of food is Bishop Arts known for?",
        answer:
          "The neighborhood is useful for tacos, brunch, Italian, French bistro food, cocktails, and seasonal neighborhood restaurants.",
      },
    ],
    links: [
      { href: "/cheap-eats-dallas", label: "Cheap Eats" },
      { href: "/date-night-restaurants-dallas", label: "Date Night Restaurants" },
      { href: "/cuisine/italian", label: "Italian Restaurants" },
    ],
  },
};
