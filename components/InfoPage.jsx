import SiteHeader from "@/components/SiteHeader";

export default function InfoPage({ eyebrow, title, children }) {
  return (
    <>
      <SiteHeader />
      <main className="info-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="info-content">{children}</div>
      </main>
    </>
  );
}
