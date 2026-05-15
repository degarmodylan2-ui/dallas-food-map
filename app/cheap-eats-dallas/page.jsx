import DirectoryPage from "@/components/DirectoryPage";
import EditorialSection from "@/components/EditorialSection";
import { restaurants } from "@/data/restaurants";

const cheapRestaurants = restaurants.filter((spot) => spot.price === "cheap");

export const metadata = {
  title: "Best Cheap Eats in Dallas",
  description:
    "Find affordable Dallas restaurants, tacos, burgers, bakeries, diners, and casual neighborhood favorites on an interactive map.",
};

export default function CheapEatsPage() {
  return (
    <DirectoryPage
      eyebrow="Dallas cheap eats"
      title="Best cheap eats in Dallas"
      description="Affordable Dallas food spots for tacos, burgers, bakeries, diners, and casual neighborhood meals that still feel worth going out for."
      restaurants={cheapRestaurants}
      initialPrice="cheap"
    >
      <EditorialSection
        intro={[
          "Dallas has plenty of big-ticket dining rooms, but some of the city's most useful meals are still the affordable ones: tacos after work, burgers with friends, bakery runs, market sandwiches, and brunch plates that do not require a special occasion.",
          "This guide focuses on casual restaurants where price is part of the appeal. Use the map to find inexpensive spots near the neighborhood you are already in, then filter by cuisine when you know what kind of meal you want.",
        ]}
        highlights={[
          {
            title: "Quick Weeknight Meals",
            body: "Use this page when you need something low-friction, casual, and close by without committing to a long dinner.",
          },
          {
            title: "Visitors on a Budget",
            body: "The map helps visitors find Dallas staples without spending steakhouse money on every meal.",
          },
          {
            title: "Lunch and Casual Groups",
            body: "Cheap-eats spots are often easier for mixed groups, quick lunches, and low-pressure meetups.",
          },
        ]}
        faqs={[
          {
            question: "What counts as cheap eats in Dallas?",
            answer:
              "For this guide, cheap means casual restaurants where many diners can build a satisfying meal without moving into special-occasion pricing.",
          },
          {
            question: "Are these only fast-food restaurants?",
            answer:
              "No. The list includes tacos, burgers, bakeries, diners, markets, vegetarian meals, and neighborhood restaurants with strong value.",
          },
          {
            question: "Should I check hours before going?",
            answer:
              "Yes. Smaller restaurants, bakeries, and barbecue spots can have limited hours or sell out of popular items.",
          },
        ]}
        links={[
          { href: "/best-bbq-dallas", label: "Best BBQ in Dallas" },
          { href: "/restaurants/bishop-arts", label: "Bishop Arts Restaurants" },
          { href: "/cuisine/mexican", label: "Mexican Restaurants" },
        ]}
      />
    </DirectoryPage>
  );
}
