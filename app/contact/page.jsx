import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Contact and Advertise",
  description:
    "Contact Dallas Food Map for restaurant updates, sponsored listings, neighborhood guide sponsorships, and advertising inquiries.",
};

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Contact" title="Advertise or send a restaurant update">
      <p>
        Dallas Food Map is being built for local discovery, search traffic, and tasteful advertising
        placements. Future sponsorship options may include featured restaurant cards, neighborhood
        guide sponsorships, sidebar placements, and newsletter sponsorships.
      </p>
      <h2>Advertising inquiries</h2>
      <p>
        For advertising, sponsorship, restaurant updates, or corrections, email:
        <br />
        <a href="mailto:degarmodylan2@gmail.com">degarmodylan2@gmail.com</a>
      </p>
      <h2>Restaurant updates</h2>
      <p>
        Send the restaurant name, what changed, and a source link if available. Useful updates
        include closures, address changes, website changes, price changes, and new locations.
      </p>
      <h2>Sponsored content policy</h2>
      <p>
        Sponsored placements should be clearly labeled. Editorial listings should remain useful and
        trustworthy even as the site starts earning revenue.
      </p>
    </InfoPage>
  );
}
