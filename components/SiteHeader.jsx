import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Dallas Food Map home">
        <span className="brand-mark">DF</span>
        <span>
          <strong>Dallas Food Map</strong>
          <small>Curated spots across DFW</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#map">Map</Link>
        <Link href="/#spots">Spots</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Advertise</Link>
      </nav>
    </header>
  );
}
