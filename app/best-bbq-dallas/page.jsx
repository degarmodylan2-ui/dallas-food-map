import DirectoryPage from "@/components/DirectoryPage";
import EditorialSection from "@/components/EditorialSection";
import { restaurants } from "@/data/restaurants";

const barbecueRestaurants = restaurants.filter((spot) => spot.cuisine === "Barbecue");

export const metadata = {
  title: "Best BBQ in Dallas",
  description:
    "Map the best barbecue spots in Dallas and nearby DFW neighborhoods, from brisket staples to destination smokehouses.",
};

export default function BestBbqPage() {
  return (
    <DirectoryPage
      eyebrow="Dallas barbecue guide"
      title="Best BBQ spots in Dallas"
      description="A focused map of brisket, ribs, sausage, and destination barbecue around Dallas and the nearby suburbs."
      restaurants={barbecueRestaurants}
    >
      <EditorialSection
        intro={[
          "Dallas barbecue ranges from central-city lunch lines to destination smokehouses worth planning a drive around. This guide keeps the focus on brisket, ribs, sausage, and the practical details that matter: location, price, and whether the spot works for a quick lunch or a bigger food trip.",
          "Barbecue is one of the categories where timing matters. Popular places may sell out, keep limited hours, or draw lines at peak times, so use the map to plan before you go.",
        ]}
        highlights={[
          {
            title: "Brisket Runs",
            body: "Use this guide when brisket is the main event and you are deciding whether to stay central or drive farther out.",
          },
          {
            title: "Lunch Planning",
            body: "Many barbecue spots are strongest at lunch, but some have limited hours or sell out early.",
          },
          {
            title: "Visitors",
            body: "Barbecue is a natural Dallas stop for visitors, and the map makes it easier to choose by area.",
          },
        ]}
        faqs={[
          {
            question: "What should I order at a Dallas barbecue spot?",
            answer:
              "Brisket is usually the benchmark, but ribs, sausage, turkey, burnt ends, sides, and specials can be just as important depending on the restaurant.",
          },
          {
            question: "Do Dallas barbecue restaurants sell out?",
            answer:
              "Some do. Destination barbecue spots and smaller smokehouses may run out of popular meats, especially on busy days.",
          },
          {
            question: "Are the best barbecue spots all inside Dallas?",
            answer:
              "No. Some of the strongest barbecue options are in nearby suburbs, which is why the guide includes greater DFW spots when they are worth the trip.",
          },
        ]}
        links={[
          { href: "/cheap-eats-dallas", label: "Cheap Eats in Dallas" },
          { href: "/restaurants/deep-ellum", label: "Deep Ellum Restaurants" },
          { href: "/cuisine/barbecue", label: "All Barbecue Spots" },
        ]}
      />
    </DirectoryPage>
  );
}
