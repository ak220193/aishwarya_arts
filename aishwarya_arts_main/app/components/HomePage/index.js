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
    title: "Lakshmi Devi – Tanjore Gold Foil Painting",
    description:
      "A divine Tanjore painting of Goddess Lakshmi, adorned with authentic 22k gold foil and traditional detailing. Ideal for pooja rooms and auspicious décor.",
    frameSize: "24x36 inches",
    price: "₹14,500",
    rating: 4.9,
    reviews: 182,
    image: "/assets/Products/webp/lakshmi-without frame-1.webp",
    category: "Lakshmi",
    isNew: true,
  },

  {
    id: 2,
    title: "Saraswathi Devi – Traditional Tanjore Art",
    description:
      "Handcrafted Tanjore masterpiece of Goddess Saraswathi, featuring premium gold foil work and intricate ornament detailing.",
    frameSize: "18x24 inches",
    price: "₹12,800",
    rating: 4.8,
    reviews: 165,
    image: "/assets/Products/webp/saraswati-flat.webp",
    category: "Saraswathi",
    isNew: true,
  },

  {
    id: 3,
    title: "Balaji – Premium Tanjore Gold Leaf Painting",
    description:
      "A powerful depiction of Lord Balaji with rich gold foil layers and traditional embossing. A timeless piece for spiritual spaces.",
    frameSize: "20x28 inches",
    price: "₹15,500",
    rating: 4.9,
    reviews: 210,
    image: "/assets/Products/15+12/balaiji/balaji-flat.jpg",
    category: "Balaji",
    isNew: true,
  },

  {
    id: 4,
    title: "Lord Ganesha – Gold Leaf Art",
    description:
      "A majestic gold-leaf painting of Lord Ganesha symbolizing prosperity, wisdom, and spiritual harmony. Fully handcrafted.",
    frameSize: "20x24 inches",
    price: "₹15,200",
    rating: 5.0,
    reviews: 298,
    image: "/assets/Products/18 +14/ganpathy/ganapthy.jpg",
    category: "Ganesha",
    isNew: true,
  },

  {
    id: 5,
    title: "Lord Murugan – South Indian Traditional Painting",
    description:
      "A vibrant depiction of Lord Murugan in classical South Indian painting style, showcasing divine energy and rich color detailing.",
    frameSize: "22x30 inches",
    price: "₹13,400",
    rating: 4.8,
    reviews: 142,
    image: "/assets/Products/18 +14/Murugan/murgan.jpg",
    category: "Murugan",
    isNew: false,
  },

  {
    id: 6,
    title: "Lord Shiva – Divine Tandav Portrait",
    description:
      "A powerful painting of Lord Shiva radiating spiritual energy and serenity. Hand-painted using premium pigments.",
    frameSize: "24x30 inches",
    price: "₹14,900",
    rating: 4.9,
    reviews: 173,
    image: "/assets/Products/24+18/Shiva/ShivaPravathi.jpg",
    category: "Shiva",
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




