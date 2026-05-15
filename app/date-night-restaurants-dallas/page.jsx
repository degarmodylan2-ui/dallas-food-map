import DirectoryPage from "@/components/DirectoryPage";
import EditorialSection from "@/components/EditorialSection";
import { restaurants } from "@/data/restaurants";

const dateNightRestaurants = restaurants.filter(
  (spot) =>
    spot.price === "expensive" ||
    spot.tags.includes("date-night") ||
    spot.tags.includes("special-occasion"),
);

export const metadata = {
  title: "Best Date Night Restaurants in Dallas",
  description:
    "Find Dallas date night restaurants, special occasion dining rooms, omakase counters, steakhouses, and polished neighborhood spots.",
};

export default function DateNightPage() {
  return (
    <DirectoryPage
      eyebrow="Dallas date night restaurants"
      title="Best date night restaurants in Dallas"
      description="Polished Dallas restaurants for anniversaries, dressed-up dinners, omakase nights, wine-friendly rooms, and special occasions."
      restaurants={dateNightRestaurants}
    >
      <EditorialSection
        intro={[
          "A good Dallas date-night restaurant depends on the kind of night you want: polished but relaxed, dramatic and expensive, intimate and reservation-driven, or lively enough to turn dinner into the whole plan.",
          "This guide brings together special-occasion dining rooms, omakase counters, wine-friendly neighborhood restaurants, steakhouses, and stylish spots where the room matters as much as the food.",
        ]}
        highlights={[
          {
            title: "Anniversaries",
            body: "Look for polished service, reservation-friendly dining rooms, tasting menus, and restaurants with a sense of occasion.",
          },
          {
            title: "First Dates",
            body: "Choose lively but comfortable spots where drinks, small plates, and a flexible meal make the night easier.",
          },
          {
            title: "Big Nights Out",
            body: "Steakhouses, omakase counters, and luxury dining rooms work best when the restaurant is the main event.",
          },
        ]}
        faqs={[
          {
            question: "Should I make a reservation for date night in Dallas?",
            answer:
              "Usually, yes. Many of the best date-night restaurants are busy, and omakase or tasting-menu spots may require advance planning.",
          },
          {
            question: "Are all date-night restaurants expensive?",
            answer:
              "No. This guide leans polished, but a good date night can also be a comfortable neighborhood restaurant with strong food, drinks, and atmosphere.",
          },
          {
            question: "Which Dallas neighborhoods are good for date night?",
            answer:
              "Knox-Henderson, Lower Greenville, Bishop Arts, Uptown, Design District, and Oak Lawn all have strong date-night options.",
          },
        ]}
        links={[
          { href: "/restaurants/bishop-arts", label: "Bishop Arts Restaurants" },
          { href: "/restaurants/lower-greenville", label: "Lower Greenville Restaurants" },
          { href: "/cuisine/japanese", label: "Japanese Restaurants" },
        ]}
      />
    </DirectoryPage>
  );
}
