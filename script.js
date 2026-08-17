/* --- 1. THE 6 SIGNATURE HEALTH DRINKS DATA WITH RUPEE PRICING (₹60 - ₹120) --- */
const signatureDrinks = {
  emerald: {
    code: "NASATYA • SIG-01",
    name: "Emerald Cellular",
    tagline: "Matcha • Spirulina • Ashwagandha",
    category: "CELLULAR FOCUS & ENERGY",
    price: "₹85",
    title: "Sustained ATP Production",
    desc: "Engineered with ceremonial Uji matcha and wild spirulina to support sustained cellular focus and clean mitochondrial energy without caffeine crashes.",
    bgTheme: "#050b08",
    gradient: "linear-gradient(180deg, rgba(46, 139, 87, 0.85), rgba(15, 60, 35, 0.98))",
    waveColorPrimary: "rgba(72, 199, 142, 0.22)",
    waveColorSecondary: "rgba(32, 178, 170, 0.14)",
    properties: ["Adaptogenic Focus", "L-Theanine Boost", "Zero Jitters"],
    rxTitle: "Emerald Cellular Formula",
    rxSubtitle: "Matched to your focus, ATP energy, and cognitive enhancement profile.",
    rxDescription: "This bespoke formulation enhances mitochondrial ATP synthesis and neurotransmitter clarity while keeping cortisol levels balanced through adaptogenic ashwagandha.",
    primaryAction: "Mitochondrial Focus & Alertness",
    dosing: "50ml • Daily at 8:00 AM",
    ingredients: [
      { name: "Uji Matcha", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=300&q=80" },
      { name: "Spirulina", image: "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?auto=format&fit=crop&w=300&q=80" },
      { name: "Ashwagandha", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  solar: {
    code: "NASATYA • SIG-02",
    name: "Solar Vitality",
    tagline: "Turmeric • Hawaiian Ginger • Yuzu",
    category: "SYSTEMIC ANTI-INFLAMMATORY",
    price: "₹95",
    title: "Joint & Tissue Resilience",
    desc: "Active curcuminoids coupled with Hawaiian gingerols promote rapid recovery from physical exertion while supporting joint lubrication.",
    bgTheme: "#0b0803",
    gradient: "linear-gradient(180deg, rgba(235, 149, 50, 0.88), rgba(168, 67, 0, 0.98))",
    waveColorPrimary: "rgba(243, 156, 18, 0.22)",
    waveColorSecondary: "rgba(230, 126, 34, 0.14)",
    properties: ["High Curcumin", "Joint Support", "Collagen Synth"],
    rxTitle: "Solar Vitality Formula",
    rxSubtitle: "Matched to your joint resilience, anti-inflammatory, and metabolic profile.",
    rxDescription: "Formulated to target synovial joint lubrication and systemic inflammatory biomarkers while improving collagen synthesis through bioavailable citrus antioxidants.",
    primaryAction: "Systemic Joint Defense",
    dosing: "50ml • Post-workout or midday",
    ingredients: [
      { name: "Golden Turmeric", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=300&q=80" },
      { name: "Ginger Root", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80" },
      { name: "Japanese Yuzu", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  velvet: {
    code: "NASATYA • SIG-03",
    name: "Velvet Longevity",
    tagline: "Wild Blueberry • Reishi • Hibiscus",
    category: "NEUROPROTECTION & IMMUNITY",
    price: "₹110",
    title: "Anthocyanin Brain Shield",
    desc: "A rich polyphenol matrix combining Nordic blueberries and beta-glucan Reishi mushrooms for cognitive longevity and immune defense.",
    bgTheme: "#08050c",
    gradient: "linear-gradient(180deg, rgba(142, 68, 173, 0.88), rgba(74, 35, 90, 0.98))",
    waveColorPrimary: "rgba(155, 89, 182, 0.22)",
    waveColorSecondary: "rgba(113, 54, 138, 0.14)",
    properties: ["Dense Anthocyanins", "Beta-Glucans", "Brain Longevity"],
    rxTitle: "Velvet Longevity Formula",
    rxSubtitle: "Matched to your immune fortitude, tranquility, and neural defense profile.",
    rxDescription: "A protective formulation engineered to fortify natural killer cell activity and protect neural pathways using dense wild polyphenol antioxidants.",
    primaryAction: "Immune & Neural Protection",
    dosing: "50ml • Late afternoon or evening",
    ingredients: [
      { name: "Wild Blueberries", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=300&q=80" },
      { name: "Reishi Extract", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=300&q=80" },
      { name: "Crimson Hibiscus", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  chandra: {
    code: "NASATYA • SIG-04",
    name: "Chandra Cooling",
    tagline: "Aloe Vera • Mint • Deep Electrolytes",
    category: "THERMAL BALANCE & GUT HEALTH",
    price: "₹65",
    title: "Systemic Hydration Reset",
    desc: "An ultra-refreshing thermal regulating elixir engineered to soothe gut inflammation, restore electrolytes, and lower core body temperature.",
    bgTheme: "#05090e",
    gradient: "linear-gradient(180deg, rgba(52, 152, 219, 0.88), rgba(20, 70, 120, 0.98))",
    waveColorPrimary: "rgba(52, 152, 219, 0.22)",
    waveColorSecondary: "rgba(41, 128, 185, 0.14)",
    properties: ["Thermal Regulation", "Electrolyte Load", "Gut Lining Support"],
    rxTitle: "Chandra Cooling Formula",
    rxSubtitle: "Matched to your thermal regulation, hydration, and digestive balance profile.",
    rxDescription: "Designed to cool systemic internal inflammation, re-hydrate cellular membranes, and provide soothing prebiotic support to the gut lining.",
    primaryAction: "Thermal Cooling & Hydration",
    dosing: "50ml • Midday or post-activity",
    ingredients: [
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" },
      { name: "Cool Mint", image: "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?auto=format&fit=crop&w=300&q=80" },
      { name: "Sea Electrolytes", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  soma: {
    code: "NASATYA • SIG-05",
    name: "Soma Deep Rest",
    tagline: "Valerian • L-Glycine • Chamomile",
    category: "PARASYMPATHETIC RECOVERY",
    price: "₹120",
    title: "Circadian REM Architecture",
    desc: "Formulated to quiet neural hyper-arousal, lower evening cortisol, and extend time spent in restorative Stage-4 REM sleep.",
    bgTheme: "#06050a",
    gradient: "linear-gradient(180deg, rgba(100, 75, 175, 0.88), rgba(45, 25, 80, 0.98))",
    waveColorPrimary: "rgba(100, 75, 175, 0.22)",
    waveColorSecondary: "rgba(75, 50, 130, 0.14)",
    properties: ["REM Optimization", "Cortisol Damping", "Neural Calm"],
    rxTitle: "Soma Restoration Formula",
    rxSubtitle: "Matched to your sleep quality, cortisol reduction, and deep rest profile.",
    rxDescription: "This bespoke nightly prescription promotes parasympathetic nervous system recovery, lowering core temperature to induce restorative REM sleep cycles.",
    primaryAction: "Circadian Sleep Reset",
    dosing: "50ml • 45 min before sleep",
    ingredients: [
      { name: "Valerian Root", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" },
      { name: "L-Glycine", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=300&q=80" },
      { name: "Chamomile Flower", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  amrita: {
    code: "NASATYA • SIG-06",
    name: "Amrita Youth",
    tagline: "NMN • Resveratrol • Pomegranate",
    category: "CELLULAR AGE REVERSAL",
    price: "₹115",
    title: "NAD+ Pathway Activation",
    desc: "An advanced sirtuin activator designed to stimulate mitochondrial biogenesis and defend DNA integrity against oxidative stress.",
    bgTheme: "#0c0505",
    gradient: "linear-gradient(180deg, rgba(211, 84, 0, 0.88), rgba(110, 30, 0, 0.98))",
    waveColorPrimary: "rgba(211, 84, 0, 0.22)",
    waveColorSecondary: "rgba(180, 50, 0, 0.14)",
    properties: ["NAD+ Activation", "Sirtuin Booster", "DNA Protection"],
    rxTitle: "Amrita Youth Formula",
    rxSubtitle: "Matched to your age reversal, cardiovascular, and NAD+ longevity profile.",
    rxDescription: "A high-potency cellular renewal prescription designed to activate sirtuin longevity proteins and preserve arterial endothelial health.",
    primaryAction: "Cellular Age Reversal",
    dosing: "50ml • Daily with breakfast",
    ingredients: [
      { name: "Bio-NMN", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=300&q=80" },
      { name: "Resveratrol", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=300&q=80" },
      { name: "Pomegranate", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=300&q=80" }
    ]
  }
};

let activeDrinkKey = "emerald";

/* --- 2. INTERNAL PAGE VIEW ROUTING SYSTEM --- */
const homePage = document.getElementById("home-page");
const drinksPage = document.getElementById("drinks-page");
const navHome = document.getElementById("nav-home");
const navDrinks = document.getElementById("nav-drinks");
const navPhilosophy = document.getElementById("nav-philosophy");
const navLogo = document.getElementById("nav-logo");
const backHomeBtn = document.getElementById("back-home-btn");

function showHomePage() {
  drinksPage.classList.remove("active");
  homePage.classList.add("active");
  navDrinks.classList.remove("active");
  navHome.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDrinksPage() {
  homePage.classList.remove("active");
  drinksPage.classList.add("active");
  navHome.classList.remove("active");
  navDrinks.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navDrinks.addEventListener("click", (e) => {
  e.preventDefault();
  showDrinksPage();
});

navHome.addEventListener("click", (e) => {
  e.preventDefault();
  showHomePage();
});

navPhilosophy.addEventListener("click", (e) => {
  e.preventDefault();
  showHomePage();
  setTimeout(() => {
    document.getElementById("philosophy").scrollIntoView({ behavior: "smooth" });
  }, 100);
});

navLogo.addEventListener("click", showHomePage);
backHomeBtn.addEventListener("click", showHomePage);

/* --- 3. SIGNATURE DRINKS INTERACTIVE SWITCHER LOGIC --- */
const drinkPills = document.querySelectorAll(".drink-pill");
const sigName = document.getElementById("sig-name");
const sigTagline = document.getElementById("sig-tagline");
const sigLiquid = document.getElementById("sig-liquid");
const sigCategory = document.getElementById("sig-category");
const sigPriceTag = document.getElementById("sig-price-tag");
const sigTitleDisplay = document.getElementById("sig-title-display");
const sigDesc = document.getElementById("sig-desc");
const sigTags = document.getElementById("sig-tags");
const sigIngGrid = document.getElementById("sig-ingredients-grid");
const orderSigBtn = document.getElementById("order-sig-btn");

function updateSignatureShowcase(key) {
  const data = signatureDrinks[key];
  activeDrinkKey = key;

  sigName.textContent = data.name;
  sigTagline.textContent = data.tagline;
  sigLiquid.style.background = data.gradient;
  document.body.style.backgroundColor = data.bgTheme;

  sigCategory.textContent = data.category;
  sigPriceTag.textContent = data.price;
  sigTitleDisplay.textContent = data.title;
  sigDesc.textContent = data.desc;
  orderSigBtn.textContent = `Order Bottle (${data.price})`;

  sigTags.innerHTML = data.properties
    .map((prop) => `<span class="prop-tag">${prop}</span>`)
    .join("");

  sigIngGrid.innerHTML = data.ingredients
    .map(
      (ing) => `
      <div class="sig-ing-item">
        <img src="${ing.image}" alt="${ing.name}" class="sig-ing-thumb" />
        <span class="sig-ing-name">${ing.name}</span>
      </div>
    `
    )
    .join("");
}

drinkPills.forEach((pill) => {
  pill.addEventListener("click", (e) => {
    drinkPills.forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
    updateSignatureShowcase(e.target.dataset.drink);
  });
});

updateSignatureShowcase("emerald");

/* --- 4. MASTER 12 FUNCTIONAL POTIONS DATA --- */
const allPotions = [
  {
    id: "sleep",
    name: "Good Sleep Potion",
    category: "Rest & Slumber",
    signatureMatch: "soma",
    color: { r: 90, g: 70, b: 150 },
    benefit: "Deep REM sleep & circadian rhythm restoration.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "energy",
    name: "Increased Energy Potion",
    category: "Cellular Energy",
    signatureMatch: "emerald",
    color: { r: 46, g: 139, b: 87 },
    benefit: "Sustained ATP production without caffeine crashes.",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "cooling",
    name: "Heat Reducing Potion",
    category: "Thermal Balance",
    signatureMatch: "chandra",
    color: { r: 52, g: 152, b: 219 },
    benefit: "Systemic thermal regulation & hydration balance.",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "focus",
    name: "Neural Clarity Potion",
    category: "Cognitive Focus",
    signatureMatch: "emerald",
    color: { r: 142, g: 68, b: 173 },
    benefit: "Enhanced neurogenesis & neural focus longevity.",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "stress",
    name: "Cortisol Homeostasis Potion",
    category: "Stress Relief",
    signatureMatch: "soma",
    color: { r: 180, g: 140, b: 100 },
    benefit: "Adaptogenic cortisol damping and calm resilience.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "immunity",
    name: "Immune Fortitude Potion",
    category: "Immune Defense",
    signatureMatch: "velvet",
    color: { r: 192, g: 57, b: 43 },
    benefit: "Beta-glucan fortified natural killer cell activity.",
    image: "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "metabolism",
    name: "Metabolic Vitality Potion",
    category: "Metabolism",
    signatureMatch: "solar",
    color: { r: 230, g: 126, b: 34 },
    benefit: "Optimized mitochondrial lipid and sugar metabolism.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "cardio",
    name: "Cardio Flow Potion",
    category: "Cardiovascular",
    signatureMatch: "amrita",
    color: { r: 211, g: 84, b: 0 },
    benefit: "Nitric oxide booster for endothelial arterial health.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "youth",
    name: "Cellular Youth Potion",
    category: "Anti-Aging",
    signatureMatch: "amrita",
    color: { r: 32, g: 178, b: 170 },
    benefit: "NAD+ pathway activation and sirtuin longevity support.",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "digestion",
    name: "Digestive Harmony Potion",
    category: "Gut Health",
    signatureMatch: "chandra",
    color: { r: 41, g: 128, b: 185 },
    benefit: "Microbiome prebiotic diversity and gut lining comfort.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "joints",
    name: "Joint Resilience Potion",
    category: "Mobility",
    signatureMatch: "solar",
    color: { r: 243, g: 156, b: 18 },
    benefit: "Anti-inflammatory curcuminoids for synovial joint lubrication.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "zen",
    name: "Zen Tranquility Potion",
    category: "Mental Peace",
    signatureMatch: "velvet",
    color: { r: 142, g: 68, b: 173 },
    benefit: "Parasympathetic nervous system soothing and peace.",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=300&q=80"
  }
];

/* --- 5. CALM RIGHT-TO-LEFT SEA DRIFT WITH 5-SECOND COLOR CYCLING --- */
const canvas = document.getElementById("waves-bg");
const ctx = canvas.getContext("2d");

let width, height;
let time = 0;
let bubbleNodes = [];

const wavePalettes = [
  { primary: { r: 72, g: 199, b: 142, a: 0.22 }, secondary: { r: 32, g: 178, b: 170, a: 0.14 } },
  { primary: { r: 243, g: 156, b: 18, a: 0.22 }, secondary: { r: 230, g: 126, b: 34, a: 0.14 } },
  { primary: { r: 155, g: 89, b: 182, a: 0.22 }, secondary: { r: 113, g: 54, b: 138, a: 0.14 } },
  { primary: { r: 52, g: 152, b: 219, a: 0.22 }, secondary: { r: 41, g: 128, b: 185, a: 0.14 } },
  { primary: { r: 100, g: 75, b: 175, a: 0.22 }, secondary: { r: 75, g: 50, b: 130, a: 0.14 } },
  { primary: { r: 211, g: 84, b: 0, a: 0.22 }, secondary: { r: 180, g: 50, b: 0, a: 0.14 } }
];

let currentColors = {
  primary: { ...wavePalettes[0].primary },
  secondary: { ...wavePalettes[0].secondary }
};

let paletteIndex = 0;

setInterval(() => {
  paletteIndex = (paletteIndex + 1) % wavePalettes.length;
}, 5000);

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateWaveColors() {
  const target = wavePalettes[paletteIndex];
  const smoothFactor = 0.015;

  ["primary", "secondary"].forEach((layer) => {
    currentColors[layer].r = lerp(currentColors[layer].r, target[layer].r, smoothFactor);
    currentColors[layer].g = lerp(currentColors[layer].g, target[layer].g, smoothFactor);
    currentColors[layer].b = lerp(currentColors[layer].b, target[layer].b, smoothFactor);
    currentColors[layer].a = lerp(currentColors[layer].a, target[layer].a, smoothFactor);
  });
}

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  initBubbleNodes();
}

class SeaBubble {
  constructor(potion, index, total) {
    this.potion = potion;
    this.img = new Image();
    this.img.src = potion.image;
    this.imgLoaded = false;
    this.img.onload = () => { this.imgLoaded = true; };

    this.radius = 28;
    this.x = (width / total) * index + Math.random() * 80;
    this.baseY = height * 0.52 + (Math.random() - 0.5) * 80;
    this.speed = 0.55 + Math.random() * 0.4;
    this.waveOffset = index * 0.7;
  }

  update() {
    this.x -= this.speed;

    if (this.x < -this.radius * 3) {
      this.x = width + this.radius * 3;
      this.baseY = height * 0.52 + (Math.random() - 0.5) * 80;
    }

    this.y =
      this.baseY +
      Math.sin(this.x * 0.003 + time * 0.015 + this.waveOffset) * 45 +
      Math.cos(time * 0.02 + this.waveOffset) * 12;
  }

  draw() {
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    if (this.imgLoaded) {
      ctx.drawImage(
        this.img,
        this.x - this.radius,
        this.y - this.radius,
        this.radius * 2,
        this.radius * 2
      );
    }

    ctx.restore();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 3.5, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.closePath();
  }
}

function initBubbleNodes() {
  bubbleNodes = [];
  const count = 15;
  for (let i = 0; i < count; i++) {
    const potion = allPotions[i % allPotions.length];
    bubbleNodes.push(new SeaBubble(potion, i, count));
  }
}

function drawWavesBackground() {
  ctx.clearRect(0, 0, width, height);

  updateWaveColors();

  const c1 = currentColors.primary;
  const c2 = currentColors.secondary;

  const layers = [
    {
      color: `rgba(${Math.round(c1.r)}, ${Math.round(c1.g)}, ${Math.round(c1.b)}, ${c1.a.toFixed(3)})`,
      speed: 0.005,
      amp: 90,
      offset: 0
    },
    {
      color: `rgba(${Math.round(c2.r)}, ${Math.round(c2.g)}, ${Math.round(c2.b)}, ${c2.a.toFixed(3)})`,
      speed: 0.003,
      amp: 120,
      offset: Math.PI
    }
  ];

  layers.forEach((layer) => {
    ctx.beginPath();
    ctx.moveTo(0, height);

    for (let x = 0; x <= width; x += 15) {
      const y =
        height * 0.55 +
        Math.sin(x * 0.0025 + time * layer.speed + layer.offset) * layer.amp;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = layer.color;
    ctx.fill();
  });

  bubbleNodes.forEach((node) => {
    node.update();
    node.draw();
  });

  time += 0.45;
  requestAnimationFrame(drawWavesBackground);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawWavesBackground();

/* --- 6. APPLE-STYLE OVERLAY MODALS SYSTEM --- */
const labModal = document.getElementById("lab-modal");
const prescriptionModal = document.getElementById("prescription-modal");
const openLabBtns = document.querySelectorAll(".open-lab-btn");
const closeLabBtn = document.getElementById("close-lab");
const closePrescriptionBtn = document.getElementById("close-prescription");
const backToLabBtn = document.getElementById("back-to-lab-btn");

openLabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    labModal.classList.add("active");
  });
});

closeLabBtn.addEventListener("click", () => {
  labModal.classList.remove("active");
});

closePrescriptionBtn.addEventListener("click", () => {
  prescriptionModal.classList.remove("active");
});

backToLabBtn.addEventListener("click", () => {
  prescriptionModal.classList.remove("active");
  labModal.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (e.target === labModal) labModal.classList.remove("active");
  if (e.target === prescriptionModal) prescriptionModal.classList.remove("active");
});

/* --- 7. BIO-LAB POTION FORMULATION & SYNTHESIS --- */
let selectedPotions = [];
const minSelection = 3;
const maxSelection = 4;

const shelfContainer = document.getElementById("potion-shelf");
const flaskLiquid = document.getElementById("flask-liquid");
const synergyScoreEl = document.getElementById("synergy-score");
const elixirNameEl = document.getElementById("elixir-name");
const elixirDescEl = document.getElementById("elixir-desc");
const benefitsListEl = document.getElementById("benefits-list");
const resetBtn = document.getElementById("reset-btn");
const synthesizeBtn = document.getElementById("synthesize-btn");

function renderShelf() {
  shelfContainer.innerHTML = allPotions
    .map(
      (potion) => `
    <div class="potion-card" data-id="${potion.id}">
      <img src="${potion.image}" alt="${potion.name}" class="potion-thumb" />
      <h4 class="potion-name">${potion.name}</h4>
      <span class="potion-category">${potion.category}</span>
    </div>
  `
    )
    .join("");

  const cards = shelfContainer.querySelectorAll(".potion-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => togglePotion(card.dataset.id));
  });
}

function togglePotion(id) {
  const potionObj = allPotions.find((p) => p.id === id);
  const existsIndex = selectedPotions.findIndex((p) => p.id === id);

  if (existsIndex > -1) {
    selectedPotions.splice(existsIndex, 1);
  } else {
    if (selectedPotions.length < maxSelection) {
      selectedPotions.push(potionObj);
    } else {
      alert("Flask capacity reached: Maximum 4 potions per formulation.");
      return;
    }
  }

  updateLabUI();
}

function updateLabUI() {
  const cards = shelfContainer.querySelectorAll(".potion-card");
  cards.forEach((card) => {
    const isSelected = selectedPotions.some((p) => p.id === card.dataset.id);
    card.classList.toggle("selected", isSelected);
  });

  const count = selectedPotions.length;
  synergyScoreEl.textContent = `${count} / 4 Selected`;

  if (count >= minSelection && count <= maxSelection) {
    synthesizeBtn.classList.remove("disabled");
  } else {
    synthesizeBtn.classList.add("disabled");
  }

  if (count === 0) {
    flaskLiquid.style.height = "0%";
    flaskLiquid.style.background = "transparent";
    elixirNameEl.textContent = "Empty Flask";
    elixirDescEl.textContent = "Select 3 or 4 potions from the shelf to synthesize your custom prescription.";
    benefitsListEl.innerHTML = "";
    return;
  }

  flaskLiquid.style.height = `${count * 25}%`;

  let totalR = 0, totalG = 0, totalB = 0;
  selectedPotions.forEach((p) => {
    totalR += p.color.r;
    totalG += p.color.g;
    totalB += p.color.b;
  });
  const avgR = Math.round(totalR / count);
  const avgG = Math.round(totalG / count);
  const avgB = Math.round(totalB / count);

  flaskLiquid.style.background = `linear-gradient(180deg, rgba(${avgR},${avgG},${avgB},0.85), rgba(${Math.max(0, avgR - 40)},${Math.max(0, avgG - 40)},${Math.max(0, avgB - 40)},0.98))`;

  const names = selectedPotions.map((p) => p.name.split(" ")[0]);
  elixirNameEl.textContent = `${names.join(" • ")} Blend`;
  elixirDescEl.textContent = `Active synthesis of ${count} functional potions ready for prescription matching.`;

  benefitsListEl.innerHTML = selectedPotions
    .map((p) => `<div class="benefit-pill">${p.benefit}</div>`)
    .join("");
}

resetBtn.addEventListener("click", () => {
  selectedPotions = [];
  updateLabUI();
});

/* --- 8. SYNTHESIZE & MATCH CLOSEST SIGNATURE ELIXIR --- */
synthesizeBtn.addEventListener("click", () => {
  if (selectedPotions.length < minSelection) return;

  const tallies = {
    emerald: 0,
    solar: 0,
    velvet: 0,
    chandra: 0,
    soma: 0,
    amrita: 0
  };

  selectedPotions.forEach((p) => {
    const matchKey = p.signatureMatch || "emerald";
    tallies[matchKey] = (tallies[matchKey] || 0) + 1;
  });

  let winningKey = "emerald";
  let maxScore = -1;
  for (const key in tallies) {
    if (tallies[key] > maxScore) {
      maxScore = tallies[key];
      winningKey = key;
    }
  }

  const matchedDrink = signatureDrinks[winningKey];

  document.getElementById("rx-title").textContent = matchedDrink.rxTitle;
  document.getElementById("rx-subtitle").textContent = matchedDrink.rxSubtitle;
  document.getElementById("rx-bottle-name").textContent = matchedDrink.name;
  document.getElementById("rx-bottle-tagline").textContent = matchedDrink.tagline;
  document.getElementById("rx-liquid").style.background = matchedDrink.gradient;
  document.getElementById("rx-description").textContent = matchedDrink.rxDescription;
  document.getElementById("rx-primary").textContent = matchedDrink.primaryAction;
  document.getElementById("rx-dosing").textContent = matchedDrink.dosing;
  document.getElementById("rx-price-amount").textContent = matchedDrink.price;
  document.getElementById("rx-badge").textContent = `99.${Math.floor(Math.random() * 6) + 4}% Bio-Compatible Formula`;

  labModal.classList.remove("active");
  setTimeout(() => {
    prescriptionModal.classList.add("active");
  }, 150);
});

// Initialize Lab Shelf
renderShelf();
updateLabUI();