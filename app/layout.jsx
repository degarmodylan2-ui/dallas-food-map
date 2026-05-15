import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://dallasfoodmap.com"),
  title: {
    default: "Dallas Food Map | Best Restaurants in Dallas by Price and Neighborhood",
    template: "%s | Dallas Food Map",
  },
  description:
    "A curated map of Dallas food spots with filters for cheap eats, mid-range favorites, date-night restaurants, cuisine, and neighborhood.",
  openGraph: {
    title: "Dallas Food Map",
    description:
      "Find Dallas restaurants by price, cuisine, neighborhood, and occasion.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5229067637916174"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
