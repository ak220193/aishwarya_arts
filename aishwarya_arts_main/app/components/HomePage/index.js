// Left navigation items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog" , href:"/blog"}
];

// Right utilities
export const utilities = [
  { type: "icon", label: "Search", icon: "FiSearch" },
  { type: "icon", label: "Wishlist", icon: "FiHeart" },
  { type: "icon", label: "Cart", icon: "FiShoppingCart" },
  { type: "button", label: "Login", href: "/login" },
];

export const people = [
  {
    id: 1,
    name: "Arul Raj",
    designation: "Tanjore Art Enthusiast",
    image:
      "/assets/testimonials/img1.webp",
  },
  {
    id: 2,
    name: "Priya Selvan",
    designation: "Collector of Tanjore Paintings",
    image:
      "/assets/testimonials/img2.webp",
  },
  {
    id: 3,
    name: "Karthik Subramanian",
    designation: "Art Lover from Chennai",
    image:
      "/assets/testimonials/img3.webp",
  },
  {
    id: 4,
    name: "Anitha Ramachandran",
    designation: "Fan of Traditional Art",
    image:
      "/assets/testimonials/img4.webp",
  },
  {
    id: 5,
    name: "Vignesh Kumar",
    designation: "Patron of Indian Handicrafts",
    image:
      "/assets/testimonials/img5.webp",
  },
  {
    id: 6,
    name: "Divya Reddy",
    designation: "Lover of South Indian Art",
    image:
      "/assets/testimonials/img6.webp",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "Royal Tanjore Painting – Lakshmi Devi",
    description:
      "An exquisite handmade Tanjore painting featuring Goddess Lakshmi, crafted with authentic gold foil and traditional South Indian artistry. Perfect for spiritual and classic interiors.",
    frameSize: "24x36 inches",
    price: "₹14,500",
    rating: 4.9,
    reviews: 182,
    image: "/assets/bestsellers/image1.jpg",
    isNew: true,
  },
  {
    id: 2,
    title: "Modern Abstract Flow",
    description:
      "A captivating blend of color and motion, enhancing modern interiors with artistic sophistication. Hand-painted on premium canvas.",
    frameSize: "20x28 inches",
    price: "₹9,800",
    rating: 4.7,
    reviews: 112,
    image: "/assets/bestsellers/image1.jpg",
    isNew: false,
  },
  {
    id: 3,
    title: "Tamil Village Life – Heritage Series",
    description:
      "Depicts the charm of traditional Tamil village life — bullock carts, temples, and vivid landscapes — crafted using eco-friendly pigments.",
    frameSize: "18x24 inches",
    price: "₹11,200",
    rating: 4.8,
    reviews: 156,
    image: "/assets/bestsellers/image1.jpg",
    isNew: true,
  },
  {
    id: 4,
    title: "Divine Krishna Portrait",
    description:
      "A soulful depiction of Lord Krishna radiating calm and devotion, detailed with delicate strokes — ideal for pooja rooms or serene interiors.",
    frameSize: "22x30 inches",
    price: "₹13,900",
    rating: 4.9,
    reviews: 204,
    image: "/assets/bestsellers/image1.jpg",
    isNew: true,
  },
  {
    id: 5,
    title: "Nature’s Harmony Landscape",
    description:
      "A peaceful hand-painted landscape celebrating Indian greenery and rural stillness — ideal for classic or modern homes.",
    frameSize: "26x40 inches",
    price: "₹10,800",
    rating: 4.6,
    reviews: 134,
    image:"/assets/bestsellers/image1.jpg",
    isNew: false,
  },
  {
    id: 6,
    title: "Ganesha in Gold Leaf Art",
    description:
      "A majestic gold-leaf painting of Lord Ganesha symbolizing wisdom and prosperity, handcrafted for auspicious spaces.",
    frameSize: "20x24 inches",
    price: "₹15,200",
    rating: 5.0,
    reviews: 298,
    image:"/assets/bestsellers/image1.jpg",
    isNew: true,
  },
];


export const CardProducts = [
  {
    id: 1,
    name: "Lord Balaji",
    slug: "lord-balaji",
    category: "Balaji",
    img: "/assets/webp/balaji mockup-2.webp",
    desc: "Traditional Tanjore painting of Lord Balaji.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {} // you will update later
    },

    tags: ["balaji", "tanjore"]
  },

  {
    id: 2,
    name: "Lord Krishna",
    slug: "lord-krishna",
    category: "Krishna",
    img: "/assets/webp/balaji mockup-2.webp",
    desc: "Vibrant Krishna Tanjore artwork.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {}
    },

    tags: ["krishna", "tanjore"]
  },

  {
    id: 3,
    name: "Lord Shiva",
    slug: "lord-shiva",
    category: "Shiva",
    img: "/assets/webp/Shiva-1.webp",
    desc: "Detailed Tanjore painting of Lord Shiva.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {}
    },

    tags: ["shiva", "tanjore"]
  },

  {
    id: 4,
    name: "Lord Murugan",
    slug: "lord-murugan",
    category: "Murugan",
    img: "/assets/webp/Murugan-1.webp",
    desc: "Classic Tanjore painting of Lord Murugan.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {}
    },

    tags: ["murugan", "tanjore"]
  },

  {
    id: 5,
    name: "Goddess Lakshmi",
    slug: "goddess-lakshmi",
    category: "Lakshmi",
    img: "/assets/webp/Lakshmi-with frame.webp",
    desc: "Traditional Tanjore painting of Goddess Lakshmi.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {}
    },

    tags: ["lakshmi", "tanjore"]
  },

  {
    id: 6,
    name: "Goddess Saraswathi",
    slug: "goddess-saraswathi",
    category: "Saraswathi",
    img: "/assets/webp/saraswati-flat.webp",
    desc: "Elegant Tanjore artwork of Goddess Saraswathi.",
    
    variations: {
      sizes: [
        "36x24 inches",
        "48x36 inches",
        "15x12 inches",
        "18x14 inches",
        "20x16 inches",
        "24x18 inches",
        "30x24 inches",
        "60x36 inches",
        "72x48 inches",
        "15x60 inches"
      ],
      frameTypes: [
        "Flat",
        "2D",
        "3D Embossed"
      ],
      prices: {}
    },

    tags: ["saraswathi", "tanjore"]
  }
];




