export interface ProductItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  specs: string[];
  image: string;
  moq: string;
  origin: string;
  inStock: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Burgers' | 'Pizza' | 'Fried Chicken' | 'Biryani' | 'BBQ' | 'Sandwiches' | 'Pasta' | 'Drinks' | 'Desserts' | 'Combo Meals';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Extreme';
  calories: string;
  prepTime: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isTodayOffer?: boolean;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  minOrder: number;
  description: string;
}

export const TRADING_PRODUCT_CATEGORIES = [
  "Industrial Products",
  "Construction Materials",
  "Agricultural Products",
  "Food Commodities",
  "Consumer Goods",
  "Chemicals",
  "Electronics",
];

export const FOOD_CATEGORIES = [
  "Burgers",
  "Pizza",
  "Fried Chicken",
  "Biryani",
  "BBQ",
  "Sandwiches",
  "Pasta",
  "Drinks",
  "Desserts",
  "Combo Meals",
] as const;

export const MOCK_TRADING_PRODUCTS: ProductItem[] = [
  {
    id: "tp-1",
    name: "Heavy Industrial Steel Beams & Rebars (BSRM Grade)",
    category: "Construction Materials",
    subcategory: "Structural Steel",
    description: "High-tensile seismic-resistant thermo-mechanically treated steel rebars and structural I-beams engineered for megastructure projects and urban sky-towers.",
    specs: ["Yield Strength: 500W Grade", "Standard: ASTM A615 / BDS ISO 6935", "Diameters: 8mm to 40mm"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    moq: "25 Metric Tons",
    origin: "Bangladesh & Global Imports",
    inStock: true,
  },
  {
    id: "tp-2",
    name: "Portland Composite Cement (PCC 42.5N)",
    category: "Construction Materials",
    subcategory: "Cement & Clinker",
    description: "Superior strength composite cement made with ultra-fine clinker, slag, and silica fume for maritime marine structures, bridges, and foundation pilings.",
    specs: ["Compressive Strength: 42.5 MPa at 28 days", "Packaging: 50kg Heavy-Duty Poly Bags / Bulk Tankers"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    moq: "500 Bags",
    origin: "Vietnam / Bangladesh",
    inStock: true,
  },
  {
    id: "tp-3",
    name: "Premium Bangladeshi Long Grain Basmati & Minikit Rice",
    category: "Agricultural Products",
    subcategory: "Grains & Cereals",
    description: "Export-grade double-polished long grain aromatic Basmati & refined Minikit paddy rice sourced directly from fertile Northern agro-districts.",
    specs: ["Grain Length: 8.35mm Average", "Moisture Content: Below 12%", "Broken Grain: Max 1.5%"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    moq: "20 Metric Tons (1 Container)",
    origin: "Dinajpur, Bangladesh",
    inStock: true,
  },
  {
    id: "tp-4",
    name: "Industrial Raw Cotton & Yarn (Combed 30s/40s)",
    category: "Industrial Products",
    subcategory: "Textile Materials",
    description: "100% natural long-staple cotton yarn engineered for high-speed automated knitting and weaving looms in garment manufacturing export zones.",
    specs: ["Count Range: Ne 24s to Ne 40s Combed", "Strength: 16.5 RKM", "Lint Trash: Max 0.8%"],
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=800&q=80",
    moq: "10 Metric Tons",
    origin: "Uzbekistan / USA / India",
    inStock: true,
  },
  {
    id: "tp-5",
    name: "Refined Pure Sunflower & Soybean Edible Oils",
    category: "Food Commodities",
    subcategory: "Edible Oils",
    description: "Fortified with Vitamin A & D, triple-filtered refined edible vegetable oil imported in bulk ISO tank containers for commercial bottling & food processing.",
    specs: ["Free Fatty Acid: Max 0.08%", "Color Lovibond: 1.2 Red Max", "FFA (as Oleic): <0.1%"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    moq: "5,000 Liters",
    origin: "Ukraine / Brazil",
    inStock: true,
  },
  {
    id: "tp-6",
    name: "Industrial Grade Caustic Soda Flakes (99% Purity)",
    category: "Chemicals",
    subcategory: "Basic Chemicals",
    description: "High purity Sodium Hydroxide flakes used widely in textile dyeing, paper production, detergent manufacturing, and water treatment.",
    specs: ["Purity: 99.0% Min NaOH", "Appearance: Pure White Micro Flakes", "Package: 25kg PP/PE Bags"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    moq: "5 Metric Tons",
    origin: "China / India",
    inStock: true,
  },
  {
    id: "tp-7",
    name: "High-Capacity Industrial Solar Inverters & LiFePO4 Modules",
    category: "Electronics",
    subcategory: "Power Systems",
    description: "Commercial grade 100kW+ hybrid solar grid-tie inverters with smart energy management and high-density lithium iron phosphate storage banks.",
    specs: ["Efficiency: 98.8%", "Protection: IP66 Industrial Enclosure", "Warranty: 10 Years Tier-1"],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    moq: "2 Units",
    origin: "Germany / China",
    inStock: true,
  },
  {
    id: "tp-8",
    name: "FMCG Consumer Packaged Goods Bulk Assortment",
    category: "Consumer Goods",
    subcategory: "Packaged Foods",
    description: "Premium wholesale assortment of tea, organic spices, handmade snacks, and personal hygiene items for global distribution networks.",
    specs: ["ISO 22000 Certified", "Halal Certified Packaging", "Shelf Life: 24 Months"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    moq: "100 Cartons",
    origin: "Bangladesh Export Hub",
    inStock: true,
  },
];

export const MOCK_MENU_ITEMS: MenuItem[] = [
  {
    id: "fm-1",
    name: "Royal Crown Kacchi Biryani (VIP Family Pot)",
    category: "Biryani",
    description: "Authentic Old Dhaka style tender goat mutton marinated in secret aromatic spices, layered with fragrant Chinigura rice, saffron, and ghee-roasted potatoes.",
    price: 750,
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Medium",
    calories: "850 kcal",
    prepTime: "25 mins",
    isPopular: true,
    isChefSpecial: true,
  },
  {
    id: "fm-2",
    name: "BanglaDorber Signature Double Smoked Smash Burger",
    category: "Burgers",
    description: "Dual 100% Angus beef smashed patties, aged English cheddar, crispy turkey bacon, caramelized shallots, and gold truffle aioli on a toasted brioche bun.",
    price: 520,
    rating: 4.8,
    reviewsCount: 289,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Mild",
    calories: "780 kcal",
    prepTime: "15 mins",
    isPopular: true,
  },
  {
    id: "fm-3",
    name: "Fire-Grilled Charcoal Beef Seekh & Chicken Tikka BBQ Platters",
    category: "BBQ",
    description: "Char-grilled spicy seekh kebabs, garlic butter chicken tikka, grilled naan, mint chutney, and pickled red onions.",
    price: 890,
    rating: 4.9,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Hot",
    calories: "920 kcal",
    prepTime: "20 mins",
    isChefSpecial: true,
  },
  {
    id: "fm-4",
    name: "Wood-Fired Truffle & Spicy Pepperoni Feast Pizza",
    category: "Pizza",
    description: "Hand-tossed artisan dough, San Marzano tomato sauce, fresh buffalo mozzarella, double spicy beef pepperoni, and white truffle oil drizzle.",
    price: 990,
    rating: 4.7,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Medium",
    calories: "1100 kcal",
    prepTime: "18 mins",
    isTodayOffer: true,
  },
  {
    id: "fm-5",
    name: "Ultra-Crispy Peri-Peri Fried Chicken Bucket (8 Pcs)",
    category: "Fried Chicken",
    description: "8 pieces of golden extra-crispy fried chicken seasoned with authentic South African Peri-Peri rub, served with garlic mayo & honey mustard dip.",
    price: 790,
    rating: 4.8,
    reviewsCount: 512,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Hot",
    calories: "1250 kcal",
    prepTime: "15 mins",
    isPopular: true,
  },
  {
    id: "fm-6",
    name: "Creamy Garlic Butter Shrimp & Parmesan Fettuccine",
    category: "Pasta",
    description: "Fresh al dente fettuccine tossed in rich garlic parmesan cream sauce, jumbo Tiger prawns, cracked black pepper, and toasted herbs.",
    price: 680,
    rating: 4.6,
    reviewsCount: 164,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281273?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Mild",
    calories: "690 kcal",
    prepTime: "20 mins",
  },
  {
    id: "fm-7",
    name: "Gourmet Philly Steak & Melted Cheese Club Sandwich",
    category: "Sandwiches",
    description: "Thinly sliced ribeye steak, sautéed bell peppers, onions, melted provolone cheese in toasted sourdough with seasoned potato wedges.",
    price: 450,
    rating: 4.7,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Medium",
    calories: "620 kcal",
    prepTime: "12 mins",
  },
  {
    id: "fm-8",
    name: "Ultimate Mega Feast Combo (Burger + Pizza + Chicken + Drinks)",
    category: "Combo Meals",
    description: "1 Large Pepperoni Pizza, 2 Smash Burgers, 4 Pcs Peri-Peri Fried Chicken, 1 Large Fries, and 2L Chilled Mocktail.",
    price: 1990,
    rating: 4.95,
    reviewsCount: 620,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Medium",
    calories: "2400 kcal",
    prepTime: "25 mins",
    isTodayOffer: true,
    isPopular: true,
  },
  {
    id: "fm-9",
    name: "Golden Saffron Falooda & Mango Passion Mojito",
    category: "Drinks",
    description: "Cool refreshing signature drink with fresh Alphonso mango pulp, mint leaves, sparkling soda, basil seeds, and ice.",
    price: 240,
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Mild",
    calories: "210 kcal",
    prepTime: "5 mins",
  },
  {
    id: "fm-10",
    name: "Molten Gold Chocolate Lava Cake with Vanilla Gelato",
    category: "Desserts",
    description: "Decadent dark Belgian chocolate cake with a molten warm chocolate center, served with Madagascar vanilla bean ice cream & gold leaf dust.",
    price: 380,
    rating: 4.9,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Mild",
    calories: "450 kcal",
    prepTime: "10 mins",
    isChefSpecial: true,
  },
];

export const MOCK_COUPONS: Coupon[] = [
  { code: "BANGLA10", discountPercentage: 10, minOrder: 500, description: "Get 10% OFF on orders over ৳500" },
  { code: "VIPGOLD", discountPercentage: 20, minOrder: 1500, description: "Save 20% OFF on orders over ৳1500" },
  { code: "WELCOME20", discountPercentage: 15, minOrder: 800, description: "15% Welcome Discount for new members" },
];

export const TRADE_SERVICES = [
  {
    title: "Global Commodity Sourcing",
    description: "Connecting Bangladeshi enterprises with Tier-1 international suppliers across 45+ countries for raw materials, industrial machinery, and bulk commodities.",
    icon: "GlobeIcon",
  },
  {
    title: "Customs Clearance & Regulatory Handling",
    description: "End-to-end clearing & forwarding at Chittagong Port, Dhaka Airport, and Benapole land port with 100% NBR and Bangladesh Bank regulatory compliance.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Multimodal Logistics & Cold Chain Freight",
    description: "Specialized ocean container shipping, air express cargo, and temperature-controlled reefer fleet for perishable agricultural and food trade.",
    icon: "TruckIcon",
  },
  {
    title: "Quality Control & Pre-Shipment Inspection",
    description: "Rigorous ISO & SGS certified testing laboratories guaranteeing exact product specifications before customs loading.",
    icon: "AwardIcon",
  },
  {
    title: "Trade Finance & LC Support",
    description: "Strategic partnerships with Bangladesh leading commercial banks to facilitate sight/deferred Letter of Credit (LC) and trade credit facilities.",
    icon: "CreditCardIcon",
  },
  {
    title: "Warehousing & Supply Chain Distribution",
    description: "Over 250,000 sq ft of modern bonded warehouse facilities in Gazipur, Chittagong, and Narayanganj.",
    icon: "FactoryIcon",
  },
];

export const INDUSTRIES_SERVED = [
  { name: "Ready-Made Garments & Textiles", count: "120+ Active Clients", icon: "Factory" },
  { name: "Infrastructure & Megaprojects", count: "35 Heavy Projects", icon: "Building" },
  { name: "Agro-Processing & Food Manufacturing", count: "85 Industrial Partners", icon: "Wheat" },
  { name: "Pharmaceuticals & Healthcare", count: "40 Labs & Producers", icon: "Flask" },
  { name: "FMCG & Supermarket Chains", count: "200+ Retail Stores", icon: "ShoppingBag" },
  { name: "Energy & Renewable Solar Power", count: "15 Solar Parks", icon: "Sun" },
  { name: "Electronics & Tech Hardware", count: "60 Telecom Vendors", icon: "Cpu" },
];

export const IMPORT_EXPORT_STEPS = [
  { step: "01", title: "Trade Requirement & Consultation", desc: "Submit your product specifications or raw material requirements. Our experts analyze global tariffs, landed costs, and port logistics." },
  { step: "02", title: "Supplier Sourcing & Quality Audit", desc: "We identify certified global manufacturers, perform pre-shipment inspections, and negotiate bulk pricing." },
  { step: "03", title: "LC & Financial Settlement", desc: "Issuance of Letter of Credit through top-tier Bangladeshi banks with full compliance under Bangladesh Bank export-import guidelines." },
  { step: "04", title: "Freight & Port Clearance", desc: "Ocean/air cargo shipment, customs documentation, tariff clearance, and rapid discharge at Chittagong or Benapole." },
  { step: "05", title: "Doorstep Delivery & Warehousing", desc: "Direct delivery to your factory floor or safe storage in BanglaDorber's climate-controlled bonded warehouses." },
];

export const TESTIMONIALS = [
  {
    name: "Kabir Hossain",
    role: "Managing Director, Apex Garments Ltd.",
    comment: "BanglaDorber has been our single most reliable trading partner for imported raw cotton and high-tensile steel. Their customs clearance speed and quality assurance are unmatched in Bangladesh.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    division: "Trading",
  },
  {
    name: "Nusrat Jahan",
    role: "Food Enthusiast & Executive Director",
    comment: "The Kacchi Biryani and Double Smoked Smash Burger from BanglaDorber Restaurant are simply world-class! Seamless online ordering with bKash and instant live order tracking.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    division: "Culinary",
  },
  {
    name: "Engr. Mahmudur Rahman",
    role: "Project Head, Dhaka Sky-Tower Project",
    comment: "Importing 5000 Tons of structural steel rebars was completed 2 weeks ahead of schedule. BanglaDorber handles complex logistics with military precision.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    division: "Trading",
  },
];

export const CHEFS_PROFILES = [
  {
    name: "Chef Master Tariqul Islam",
    role: "Executive Head Chef",
    experience: "18+ Years International Fine Dining",
    specialty: "Aromatic Royal Kacchi & Heritage Mughlai Cuisine",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chef Jean-Luc Dubois",
    role: "Senior Pastry & Steak Artisan",
    experience: " Michelin Star Kitchen Alum",
    specialty: "Wood-Fired Artisanal Pizzas & Belgian Chocolate Desserts",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
  },
];

export const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "Navigating Bangladesh Import Policy 2026: Key Customs Regulations & Tariff Updates",
    category: "International Trade",
    date: "July 24, 2026",
    readTime: "5 min read",
    snippet: "Discover how recent duty restructuring affects raw material imports, industrial equipment LCs, and supply chain timelines for Bangladeshi businesses.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "blog-2",
    title: "The Art of Slow-Cooked Kacchi: How We Source Royal Spices & Chinigura Rice",
    category: "Culinary Secrets",
    date: "July 20, 2026",
    readTime: "4 min read",
    snippet: "Take an exclusive look inside BanglaDorber kitchen where 24-hour spice marination and traditional clay oven dum cooking redefine authentic taste.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "blog-3",
    title: "Expanding Agro Export Horizons: Bangladeshi Grain & Commodities in Global Markets",
    category: "Commodities & Trade",
    date: "July 15, 2026",
    readTime: "6 min read",
    snippet: "Exploring high-demand export corridors in the Middle East & Europe for premium Bangladeshi aromatic rice, organic tea, and processed foods.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
  },
];

export const FAQS = [
  {
    q: "What products and commodities does BanglaDorber Trading specialize in?",
    a: "We specialize in 7 core categories: Construction Steel & Cement, Raw Textile Cotton & Yarn, Agricultural Cereals & Rice, Refined Edible Oils, Basic Industrial Chemicals, Renewable Solar & Electrical Hardware, and Packaged Consumer Goods.",
  },
  {
    q: "How does the online food ordering and payment system work?",
    a: "You can browse our menu, customize items, apply discount promo codes, select your delivery address in Dhaka/Bangladesh, and pay via Cash on Delivery, bKash, Nagad, Rocket, or Visa/Mastercard. Track your order live in real time!",
  },
  {
    q: "Can I request a custom bulk import quotation (RFQ)?",
    a: "Yes! Simply click 'Get a Quote' anywhere on our website, fill in your product specifications, volume required, and LC terms. Our enterprise trade desk will send you a detailed pro-forma quote within 4 business hours.",
  },
  {
    q: "How far in advance can I make a table reservation?",
    a: "You can reserve tables up to 30 days in advance. We offer VIP Private Rooms, Rooftop Garden Dining, and Main Family Dining areas.",
  },
];
