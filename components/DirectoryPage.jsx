"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import AdSlot from "@/components/AdSlot";
import SiteHeader from "@/components/SiteHeader";
import {
  getCuisines,
  getNeighborhoods,
  priceLabels,
  restaurants as allRestaurants,
  slugify,
} from "@/data/restaurants";

export default function DirectoryPage({
  eyebrow,
  title,
  description,
  restaurants,
  initialPrice = "all",
  children,
}) {
  const [activePrice, setActivePrice] = useState(initialPrice);
  const [query, setQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("all");

  const cuisines = useMemo(() => getCuisines(restaurants), [restaurants]);
  const neighborhoods = useMemo(() => getNeighborhoods(restaurants), [restaurants]);

  const visibleRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return restaurants.filter((spot) => {
      const searchable = `${spot.name} ${spot.cuisine} ${spot.neighborhood} ${spot.summary} ${spot.tags.join(" ")}`.toLowerCase();

      return (
        (activePrice === "all" || spot.price === activePrice) &&
        (selectedCuisine === "all" || spot.cuisine === selectedCuisine) &&
        (selectedNeighborhood === "all" || spot.neighborhood === selectedNeighborhood) &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [activePrice, query, restaurants, selectedCuisine, selectedNeighborhood]);

  function resetFilters() {
    setActivePrice(initialPrice);
    setQuery("");
    setSelectedCuisine("all");
    setSelectedNeighborhood("all");
  }

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 id="page-title">{title}</h1>
            <p>{description}</p>
          </div>
          <AdSlot className="hero-ad" title="Ad space" size="728 x 90" />
        </section>

        <section className="quick-links" aria-label="Popular restaurant guides">
          <Link href="/cheap-eats-dallas">Cheap Eats</Link>
          <Link href="/best-bbq-dallas">BBQ</Link>
          <Link href="/date-night-restaurants-dallas">Date Night</Link>
          <Link href="/restaurants/deep-ellum">Deep Ellum</Link>
          <Link href="/restaurants/bishop-arts">Bishop Arts</Link>
        </section>

        <section className="toolbar" aria-label="Food spot filters">
          <label className="search">
            <span>Search</span>
            <input
              type="search"
              placeholder="Name, cuisine, neighborhood"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="filter-group" role="group" aria-label="Price filters">
            {[
              ["all", "All"],
              ["cheap", "$"],
              ["medium", "$$"],
              ["expensive", "$$$"],
            ].map(([price, label]) => (
              <button
                className={`filter-button ${activePrice === price ? "is-active" : ""}`}
                type="button"
                key={price}
                onClick={() => setActivePrice(price)}
              >
                {label}
              </button>
            ))}
          </div>

          <label className="select">
            <span>Cuisine</span>
            <select
              value={selectedCuisine}
              onChange={(event) => setSelectedCuisine(event.target.value)}
            >
              <option value="all">All cuisines</option>
              {cuisines.map((cuisine) => (
                <option value={cuisine} key={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </label>

          <label className="select">
            <span>Neighborhood</span>
            <select
              value={selectedNeighborhood}
              onChange={(event) => setSelectedNeighborhood(event.target.value)}
            >
              <option value="all">All neighborhoods</option>
              {neighborhoods.map((neighborhood) => (
                <option value={neighborhood} key={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </label>

          <button className="reset-button" type="button" onClick={resetFilters}>
            Reset
          </button>
        </section>

        <section className="layout" id="map">
          <MapPanel restaurants={visibleRestaurants} />

          <aside className="directory-panel" id="spots">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Directory</p>
                <h2>Top Dallas Food Spots</h2>
              </div>
              <span>
                {visibleRestaurants.length} {visibleRestaurants.length === 1 ? "spot" : "spots"}
              </span>
            </div>

            <AdSlot className="side-ad" title="Sponsored" size="Local restaurant or brand" />

            <div className="spot-list">
              {visibleRestaurants.map((spot) => (
                <article className="spot-card" key={spot.slug}>
                  <h3>
                    <Link href={`/spot/${spot.slug}`}>{spot.name}</Link>
                  </h3>
                  <div className="spot-meta">
                    <span className={`tag price-${spot.price}`}>{priceLabels[spot.price]}</span>
                    <span className="tag">{spot.cuisine}</span>
                    <Link className="tag tag-link" href={`/restaurants/${slugify(spot.neighborhood)}`}>
                      {spot.neighborhood}
                    </Link>
                  </div>
                  <p>{spot.summary}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {children}

        <section className="seo-grid" aria-label="Browse Dallas restaurant guides">
          <GuideBlock
            title="Browse by Neighborhood"
            links={getNeighborhoods(allRestaurants).map((neighborhood) => ({
              href: `/restaurants/${slugify(neighborhood)}`,
              label: neighborhood,
            }))}
          />
          <GuideBlock
            title="Browse by Cuisine"
            links={getCuisines(allRestaurants).map((cuisine) => ({
              href: `/cuisine/${slugify(cuisine)}`,
              label: cuisine,
            }))}
          />
        </section>

        <section className="revenue-band" id="advertise">
          <div>
            <p className="eyebrow">Revenue-ready</p>
            <h2>Built for ads, sponsors, and featured listings.</h2>
            <p>
              The page includes ad zones that can later connect to Google AdSense, direct sponsors,
              or promoted restaurant placements.
            </p>
          </div>
          <Link className="cta" href="/contact">
            Advertise with us
          </Link>
        </section>
      </main>
    </>
  );
}

function MapPanel({ restaurants }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef(null);
  const [leafletReady, setLeafletReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function setupMap() {
      if (!window.L) {
        await loadLeaflet();
      }

      if (!isMounted || !mapRef.current || mapInstanceRef.current) {
        return;
      }

      const map = window.L.map(mapRef.current, {
        scrollWheelZoom: false,
      }).setView([32.802, -96.805], 11);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      mapInstanceRef.current = map;
      markersRef.current = window.L.layerGroup().addTo(map);
      setLeafletReady(true);
      window.setTimeout(() => map.invalidateSize(), 200);
    }

    setupMap();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const markers = markersRef.current;

    if (!leafletReady || !map || !markers || !window.L) {
      return;
    }

    markers.clearLayers();

    restaurants.forEach((spot) => {
      window.L.marker([spot.lat, spot.lng], {
        title: spot.name,
        alt: spot.name,
        icon: window.L.divIcon({
          className: `map-pin map-pin-${spot.price}`,
          html: `<span aria-hidden="true">${priceLabels[spot.price]}</span>`,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        }),
      })
        .bindPopup(`
          <p class="popup-title">${spot.name}</p>
          <div class="popup-meta">${priceLabels[spot.price]} | ${spot.cuisine} | ${spot.neighborhood}</div>
        `)
        .addTo(markers);
    });

    if (restaurants.length) {
      const bounds = window.L.latLngBounds(restaurants.map((spot) => [spot.lat, spot.lng]));
      map.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
    }

    map.invalidateSize();
  }, [leafletReady, restaurants]);

  return (
    <div className="map-panel">
      <div ref={mapRef} id="foodMap" aria-label="Map of Dallas food spots" />
    </div>
  );
}

function GuideBlock({ title, links }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function loadLeaflet() {
  return new Promise((resolve, reject) => {
    if (window.L) {
      resolve();
      return;
    }

    const existingScript = document.querySelector("script[data-leaflet]");

    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.append(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.dataset.leaflet = "true";
    script.onload = resolve;
    script.onerror = reject;
    document.body.append(script);
  });
}
