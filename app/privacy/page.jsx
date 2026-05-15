import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Dallas Food Map, including analytics, advertising, cookies, and contact information.",
};

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Privacy Policy">
      <p>Last updated: May 15, 2026</p>
      <p>
        Dallas Food Map is a restaurant directory. This policy explains the types of information
        that may be collected when people use the site.
      </p>
      <h2>Information we collect</h2>
      <p>
        The site may collect basic technical information such as browser type, pages visited,
        referring pages, approximate location derived from IP address, and device information
        through analytics or hosting logs.
      </p>
      <h2>Advertising and cookies</h2>
      <p>
        If Google AdSense or another ad provider is added, third-party vendors may use cookies,
        web beacons, or similar technologies to serve ads and measure performance. Google may use
        advertising cookies to show ads based on a user&apos;s prior visits to this and other sites.
      </p>
      <p>
        Users can learn more about Google advertising and ad personalization at
        <a href="https://policies.google.com/technologies/ads"> Google&apos;s advertising policy page</a>.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions or corrections, contact
        <a href="mailto:degarmodylan2@gmail.com"> degarmodylan2@gmail.com</a>.
      </p>
    </InfoPage>
  );
}
