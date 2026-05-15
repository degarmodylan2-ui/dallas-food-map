import DirectoryPage from "@/components/DirectoryPage";
import { restaurants } from "@/data/restaurants";

export default function HomePage() {
  return (
    <DirectoryPage
      eyebrow="Dallas dining directory"
      title="Find the city's best bites by price, neighborhood, and craving."
      description="A map-first guide for locals and visitors looking for everything from cheap tacos to polished date-night restaurants."
      restaurants={restaurants}
      initialPrice="all"
    />
  );
}
