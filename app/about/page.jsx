import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "About Dallas Food Map",
  description:
    "Learn how Dallas Food Map curates Dallas-area restaurants by neighborhood, cuisine, price, and occasion.",
};

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About" title="A practical Dallas restaurant directory">
      <p>
        Dallas Food Map is a curated guide to restaurants across Dallas and nearby DFW
        neighborhoods. The goal is simple: help people quickly find useful local food options by
        price, cuisine, neighborhood, and occasion.
      </p>
      <p>
        The site starts with editorially selected restaurants, then organizes them into map-first
        guides like cheap eats, barbecue, date-night restaurants, cuisines, and neighborhoods.
      </p>
      <h2>How spots are selected</h2>
      <p>
        Restaurants are chosen for local relevance, reputation, usefulness to visitors and locals,
        and coverage across budgets and neighborhoods. Listings are not paid placements unless they
        are clearly marked as sponsored.
      </p>
      <h2>Corrections</h2>
      <p>
        Restaurant details can change. If a listing needs an update, use the contact page and share
        the restaurant name plus the correction.
      </p>
    </InfoPage>
  );
}
