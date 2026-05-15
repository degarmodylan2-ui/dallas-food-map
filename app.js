const spots = [
  {
    name: "Pecan Lodge",
    cuisine: "Barbecue",
    neighborhood: "Deep Ellum",
    price: "medium",
    lat: 32.7837,
    lng: -96.7837,
    summary: "A Dallas barbecue staple known for brisket, ribs, and long lunch lines.",
  },
  {
    name: "Revolver Taco Lounge",
    cuisine: "Mexican",
    neighborhood: "Deep Ellum",
    price: "medium",
    lat: 32.7841,
    lng: -96.7812,
    summary: "Refined tacos, seafood specials, and a tasting-menu side for a bigger night out.",
  },
  {
    name: "Terry Black's Barbecue",
    cuisine: "Barbecue",
    neighborhood: "Deep Ellum",
    price: "medium",
    lat: 32.7811,
    lng: -96.7833,
    summary: "Central Texas-style brisket, ribs, sausage, and cafeteria-line ease near Deep Ellum.",
  },
  {
    name: "Partenope Ristorante",
    cuisine: "Italian",
    neighborhood: "Downtown",
    price: "medium",
    lat: 32.7829,
    lng: -96.7987,
    summary: "Neapolitan pizza, pastas, and downtown lunch-to-dinner flexibility.",
  },
  {
    name: "Mami Coco",
    cuisine: "Mexican",
    neighborhood: "Old East Dallas",
    price: "cheap",
    lat: 32.8022,
    lng: -96.7765,
    summary: "Compact taqueria known for saucy tacos, quick service, and strong value.",
  },
  {
    name: "Mia's Tex-Mex",
    cuisine: "Tex-Mex",
    neighborhood: "Oak Lawn",
    price: "cheap",
    lat: 32.8173,
    lng: -96.8115,
    summary: "Comforting Dallas Tex-Mex with brisket tacos and a loyal neighborhood crowd.",
  },
  {
    name: "Gemma",
    cuisine: "New American",
    neighborhood: "Knox-Henderson",
    price: "expensive",
    lat: 32.8147,
    lng: -96.784,
    summary: "Polished plates, wine-friendly cooking, and a warm dinner-room feel.",
  },
  {
    name: "Barsotti's",
    cuisine: "Italian",
    neighborhood: "Oak Lawn",
    price: "medium",
    lat: 32.8169,
    lng: -96.8056,
    summary: "A polished red-sauce Italian room with pastas, steaks, and neighborhood regulars.",
  },
  {
    name: "Nonna",
    cuisine: "Italian",
    neighborhood: "Highland Park",
    price: "expensive",
    lat: 32.8233,
    lng: -96.8078,
    summary: "Seasonal Italian cooking with handmade pasta, wood-fired touches, and a grown-up feel.",
  },
  {
    name: "Sister",
    cuisine: "Mediterranean",
    neighborhood: "Lower Greenville",
    price: "expensive",
    lat: 32.8151,
    lng: -96.7701,
    summary: "Stylish neighborhood dining with Mediterranean-leaning plates and a busy bar.",
  },
  {
    name: "Ngon Vietnamese Kitchen",
    cuisine: "Vietnamese",
    neighborhood: "Lower Greenville",
    price: "medium",
    lat: 32.8147,
    lng: -96.7705,
    summary: "Fresh Vietnamese street-food favorites, rolls, pho, curries, and personal family recipes.",
  },
  {
    name: "Keller's Drive-In",
    cuisine: "Burgers",
    neighborhood: "Northwest Dallas",
    price: "cheap",
    lat: 32.8611,
    lng: -96.8549,
    summary: "Old-school burgers, fries, and car-hop energy at friendly prices.",
  },
  {
    name: "Mot Hai Ba",
    cuisine: "Vietnamese",
    neighborhood: "Lakewood",
    price: "expensive",
    lat: 32.8194,
    lng: -96.7522,
    summary: "A cozy, celebrated spot for modern Vietnamese dishes and date-night dinners.",
  },
  {
    name: "Goodfriend Beer Garden and Burger House",
    cuisine: "Burgers",
    neighborhood: "East Dallas",
    price: "cheap",
    lat: 32.814,
    lng: -96.7294,
    summary: "Laid-back burgers, craft beer, and a neighborhood patio near White Rock.",
  },
  {
    name: "Celebration",
    cuisine: "Southern",
    neighborhood: "Northwest Dallas",
    price: "medium",
    lat: 32.8586,
    lng: -96.8372,
    summary: "Home-style Dallas comfort food with family-style sides and a long local history.",
  },
  {
    name: "Royal China",
    cuisine: "Chinese",
    neighborhood: "Preston Hollow",
    price: "medium",
    lat: 32.8641,
    lng: -96.8048,
    summary: "Long-running Chinese American favorite with handmade noodles and dumplings.",
  },
  {
    name: "Kuby's Sausage House",
    cuisine: "German",
    neighborhood: "University Park",
    price: "cheap",
    lat: 32.8413,
    lng: -96.7845,
    summary: "German market and restaurant for sausages, schnitzel, breakfast plates, and deli staples.",
  },
  {
    name: "Jimmy's Food Store",
    cuisine: "Italian",
    neighborhood: "Old East Dallas",
    price: "cheap",
    lat: 32.7967,
    lng: -96.7756,
    summary: "Beloved Italian market with sandwiches, pasta, wine, and pantry finds.",
  },
  {
    name: "Town Hearth",
    cuisine: "Steakhouse",
    neighborhood: "Design District",
    price: "expensive",
    lat: 32.7989,
    lng: -96.8288,
    summary: "Big-night steakhouse with dramatic interiors and a serious wine list.",
  },
  {
    name: "The Charles",
    cuisine: "Italian",
    neighborhood: "Design District",
    price: "expensive",
    lat: 32.7977,
    lng: -96.8299,
    summary: "Design District dining with Italian influence, dramatic style, and a lively bar scene.",
  },
  {
    name: "El Carlos Elegante",
    cuisine: "Mexican",
    neighborhood: "Design District",
    price: "expensive",
    lat: 32.7926,
    lng: -96.8284,
    summary: "Upscale Mexican cooking centered on masa, fire, seafood, and celebratory dinners.",
  },
  {
    name: "Carbone Vino",
    cuisine: "Italian",
    neighborhood: "Design District",
    price: "expensive",
    lat: 32.7964,
    lng: -96.8294,
    summary: "Glossy Italian-American dining with wine, steaks, pastas, and special-occasion energy.",
  },
  {
    name: "Cattleack Barbeque",
    cuisine: "Barbecue",
    neighborhood: "Farmers Branch",
    price: "medium",
    lat: 32.933,
    lng: -96.9016,
    summary: "Destination-worthy barbecue with brisket, burnt ends, and limited hours.",
  },
  {
    name: "Roots Southern Table",
    cuisine: "Southern",
    neighborhood: "Farmers Branch",
    price: "expensive",
    lat: 32.9258,
    lng: -96.8409,
    summary: "Chef-driven Southern cooking with gumbo, fried chicken, and polished hospitality.",
  },
  {
    name: "Ari Korean BBQ",
    cuisine: "Korean",
    neighborhood: "Carrollton",
    price: "medium",
    lat: 32.9842,
    lng: -96.9101,
    summary: "Korean barbecue destination for grilled beef cuts, banchan, and group dinners.",
  },
  {
    name: "La Casita Bakeshop",
    cuisine: "Bakery",
    neighborhood: "Richardson",
    price: "cheap",
    lat: 32.9484,
    lng: -96.7297,
    summary: "Destination bakery for laminated pastries, breads, sweets, and weekend treats.",
  },
  {
    name: "Sanjh Restaurant and Bar",
    cuisine: "Indian",
    neighborhood: "Las Colinas",
    price: "expensive",
    lat: 32.8678,
    lng: -96.9371,
    summary: "Modern Indian dining with refined plating, cocktails, and high-energy service.",
  },
  {
    name: "Kalachandji's",
    cuisine: "Vegetarian",
    neighborhood: "East Dallas",
    price: "cheap",
    lat: 32.7941,
    lng: -96.7646,
    summary: "Vegetarian buffet and courtyard dining inside a peaceful temple setting.",
  },
  {
    name: "Uchi Dallas",
    cuisine: "Japanese",
    neighborhood: "Uptown",
    price: "expensive",
    lat: 32.8043,
    lng: -96.7991,
    summary: "Elegant sushi, composed plates, and tasting-menu energy for special occasions.",
  },
  {
    name: "Mamani",
    cuisine: "French",
    neighborhood: "Uptown",
    price: "expensive",
    lat: 32.8019,
    lng: -96.8013,
    summary: "Michelin-starred French contemporary dining with polished technique and luxury touches.",
  },
  {
    name: "Mister Charles",
    cuisine: "New American",
    neighborhood: "Knox-Henderson",
    price: "expensive",
    lat: 32.8216,
    lng: -96.7893,
    summary: "Grand, stylish dining for caviar, steaks, pastas, and dressed-up Dallas nights.",
  },
  {
    name: "Tatsu Dallas",
    cuisine: "Japanese",
    neighborhood: "Deep Ellum",
    price: "expensive",
    lat: 32.7826,
    lng: -96.7832,
    summary: "Intimate omakase counter focused on precise sushi and a reserved-room experience.",
  },
  {
    name: "Tei-An",
    cuisine: "Japanese",
    neighborhood: "Arts District",
    price: "expensive",
    lat: 32.7913,
    lng: -96.8001,
    summary: "Soba, sushi, and Japanese cooking in a refined Arts District setting.",
  },
  {
    name: "Shoyo",
    cuisine: "Japanese",
    neighborhood: "Lower Greenville",
    price: "expensive",
    lat: 32.8143,
    lng: -96.7708,
    summary: "Tiny omakase room with focused sushi service and hard-to-book seats.",
  },
  {
    name: "Sushi Kozy",
    cuisine: "Japanese",
    neighborhood: "Lakewood",
    price: "expensive",
    lat: 32.8199,
    lng: -96.7527,
    summary: "Contemporary omakase dining with kaiseki influence and polished presentation.",
  },
  {
    name: "El Come Taco",
    cuisine: "Mexican",
    neighborhood: "East Dallas",
    price: "cheap",
    lat: 32.8083,
    lng: -96.7699,
    summary: "Casual Mexico City-style tacos with strong late-night appeal.",
  },
  {
    name: "Trompo",
    cuisine: "Mexican",
    neighborhood: "Bishop Arts",
    price: "cheap",
    lat: 32.7443,
    lng: -96.8286,
    summary: "No-frills tacos, quesadillas, and trompo-style meat in Oak Cliff.",
  },
  {
    name: "Lucia",
    cuisine: "Italian",
    neighborhood: "Bishop Arts",
    price: "expensive",
    lat: 32.7472,
    lng: -96.8287,
    summary: "Small, beloved Italian restaurant with rotating handmade pastas and tough reservations.",
  },
  {
    name: "Restaurant Beatrice",
    cuisine: "Cajun",
    neighborhood: "Oak Cliff",
    price: "expensive",
    lat: 32.7578,
    lng: -96.8228,
    summary: "Louisiana-style Cajun and Creole cooking with fried chicken, oysters, and warm service.",
  },
  {
    name: "Written by the Seasons",
    cuisine: "New American",
    neighborhood: "Bishop Arts",
    price: "medium",
    lat: 32.7466,
    lng: -96.8282,
    summary: "Seasonal share plates, vegetables, wine, and relaxed Bishop Arts polish.",
  },
  {
    name: "Encina",
    cuisine: "New American",
    neighborhood: "Oak Cliff",
    price: "medium",
    lat: 32.7499,
    lng: -96.837,
    summary: "Neighborhood favorite for wood-fired cooking, brunch, cocktails, and easygoing dinners.",
  },
  {
    name: "Boulevardier",
    cuisine: "French",
    neighborhood: "Bishop Arts",
    price: "medium",
    lat: 32.747,
    lng: -96.8284,
    summary: "Bistro staples, oysters, steaks, wine, and brunch in the Bishop Arts core.",
  },
  {
    name: "Oddfellows",
    cuisine: "Brunch",
    neighborhood: "Bishop Arts",
    price: "cheap",
    lat: 32.7468,
    lng: -96.8288,
    summary: "Casual brunch, coffee, chicken and waffles, and all-day neighborhood comfort.",
  },
  {
    name: "Meridian",
    cuisine: "Brazilian",
    neighborhood: "The Village",
    price: "expensive",
    lat: 32.8669,
    lng: -96.7532,
    summary: "Modern Brazilian tasting-menu cooking with a sleek room and serious technique.",
  },
  {
    name: "Quarter Acre",
    cuisine: "New American",
    neighborhood: "Lower Greenville",
    price: "expensive",
    lat: 32.8142,
    lng: -96.7702,
    summary: "Refined, personal cooking with New Zealand influence and a special-occasion cadence.",
  },
  {
    name: "Petra and the Beast",
    cuisine: "New American",
    neighborhood: "Old East Dallas",
    price: "expensive",
    lat: 32.8021,
    lng: -96.7752,
    summary: "Creative, produce-driven cooking with fermentation, handmade pasta, and tasting-menu roots.",
  },
  {
    name: "Sachet",
    cuisine: "Mediterranean",
    neighborhood: "Oak Lawn",
    price: "medium",
    lat: 32.8141,
    lng: -96.8081,
    summary: "Mediterranean small plates, bright salads, dips, kebabs, and a strong wine list.",
  },
  {
    name: "Loro Dallas",
    cuisine: "Asian Smokehouse",
    neighborhood: "Old East Dallas",
    price: "medium",
    lat: 32.8122,
    lng: -96.7708,
    summary: "Casual Asian smokehouse plates, sandwiches, rice bowls, cocktails, and patio energy.",
  },
  {
    name: "Cane Rosso",
    cuisine: "Pizza",
    neighborhood: "Deep Ellum",
    price: "cheap",
    lat: 32.7836,
    lng: -96.7839,
    summary: "Neapolitan-style pizza, casual tables, and easy group-friendly dining.",
  },
  {
    name: "Niwa Japanese BBQ",
    cuisine: "Japanese",
    neighborhood: "Deep Ellum",
    price: "medium",
    lat: 32.7839,
    lng: -96.7849,
    summary: "Japanese yakiniku with tabletop grilling, drinks, and a social dinner format.",
  },
  {
    name: "Maple Leaf Diner",
    cuisine: "Diner",
    neighborhood: "North Dallas",
    price: "cheap",
    lat: 32.9337,
    lng: -96.8203,
    summary: "Canadian-leaning diner plates, big breakfasts, poutine, and oversized sweets.",
  },
  {
    name: "Crown Block",
    cuisine: "Steakhouse",
    neighborhood: "Downtown",
    price: "expensive",
    lat: 32.7753,
    lng: -96.8091,
    summary: "Reunion Tower steakhouse for skyline views, seafood, steaks, and occasions.",
  },
];

const priceLabels = {
  cheap: "$",
  medium: "$$",
  expensive: "$$$",
};

const map = L.map("foodMap", {
  scrollWheelZoom: false,
}).setView([32.802, -96.805], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

window.addEventListener("load", () => {
  map.invalidateSize();
  window.setTimeout(() => map.invalidateSize(), 250);
});

window.addEventListener("resize", () => {
  map.invalidateSize();
});

const markers = L.layerGroup().addTo(map);
const spotList = document.querySelector("#spotList");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const cuisineSelect = document.querySelector("#cuisineSelect");
const resetButton = document.querySelector("#resetButton");
const filterButtons = document.querySelectorAll(".filter-button");

let activePrice = "all";

function populateCuisines() {
  const cuisines = [...new Set(spots.map((spot) => spot.cuisine))].sort();

  cuisines.forEach((cuisine) => {
    const option = document.createElement("option");
    option.value = cuisine;
    option.textContent = cuisine;
    cuisineSelect.append(option);
  });
}

function matchesFilters(spot) {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCuisine = cuisineSelect.value;
  const searchable = `${spot.name} ${spot.cuisine} ${spot.neighborhood} ${spot.summary}`.toLowerCase();

  return (
    (activePrice === "all" || spot.price === activePrice) &&
    (selectedCuisine === "all" || spot.cuisine === selectedCuisine) &&
    (!query || searchable.includes(query))
  );
}

function renderSpots() {
  const visibleSpots = spots.filter(matchesFilters);

  markers.clearLayers();
  spotList.innerHTML = "";
  resultCount.textContent = `${visibleSpots.length} ${visibleSpots.length === 1 ? "spot" : "spots"}`;

  visibleSpots.forEach((spot) => {
    const marker = L.marker([spot.lat, spot.lng], {
      title: spot.name,
      alt: spot.name,
      icon: L.divIcon({
        className: `map-pin map-pin-${spot.price}`,
        html: `<span aria-hidden="true">${priceLabels[spot.price]}</span>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }),
    }).bindPopup(`
      <p class="popup-title">${spot.name}</p>
      <div class="popup-meta">${priceLabels[spot.price]} | ${spot.cuisine} | ${spot.neighborhood}</div>
    `);

    marker.addTo(markers);

    const card = document.createElement("article");
    card.className = "spot-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${spot.name}</h3>
      <div class="spot-meta">
        <span class="tag price-${spot.price}">${priceLabels[spot.price]}</span>
        <span class="tag">${spot.cuisine}</span>
        <span class="tag">${spot.neighborhood}</span>
      </div>
      <p>${spot.summary}</p>
    `;

    card.addEventListener("click", () => {
      map.invalidateSize();
      map.flyTo([spot.lat, spot.lng], 14, { duration: 0.6 });
      marker.openPopup();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });

    spotList.append(card);
  });

  if (visibleSpots.length) {
    const bounds = L.latLngBounds(visibleSpots.map((spot) => [spot.lat, spot.lng]));
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activePrice = button.dataset.price;
    renderSpots();
  });
});

searchInput.addEventListener("input", renderSpots);
cuisineSelect.addEventListener("change", renderSpots);
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  cuisineSelect.value = "all";
  activePrice = "all";
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.price === "all");
  });
  renderSpots();
});

populateCuisines();
renderSpots();
