// Left navigation items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
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


export const priceTable = [
  { size: '15x12', flat: 11500, d2: 16000, d3: 27000 },
  { size: '18x14', flat: 16000, d2: 21000, d3: 32500 },
  { size: '20x16', flat: 21500, d2: 25500, d3: 38500 },
  { size: '24x18', flat: 27500, d2: 34000, d3: 42500 },
  { size: '30x24', flat: 33000, d2: 39000, d3: 57000 },
  { size: '36x24', flat: 42500, d2: 53000, d3: 81500 },
  { size: '48x36', flat: 71500, d2: 87500, d3: 146000 },
  { size: '60x36', flat: 91500, d2: 114500, d3: 192000 },
  { size: '72x48', flat: 143000, d2: 181000, d3: 291500 },
];


export const MainProducts = [
    {
      "id": "BALAJI-001",
      "title": "Balaji Tanjore Painting",
      "slug": "balaji-tanjore-painting",
      "category": "Balaji",
      "coverImage": "/assets/products/balaji/001/cover.webp",
      "images": [
        "/assets/products/balaji/001/1.webp",
        "/assets/products/balaji/001/2.webp"
      ],
      "sizes": "default",
      "description": "Traditional handcrafted Balaji Tanjore painting with 22ct gold foil and embossed detailing.",
      "seo": {
        "title": "Balaji Tanjore Painting",
        "description": "Premium Balaji Tanjore painting with authentic gold foil work.",
        "keywords": ["Balaji painting", "Perumal painting", "Tanjore Balaji"]
      }
    },

    {
      "id": "PERUMAL-002",
      "title": "Lord Perumal Tanjore Painting",
      "slug": "lord-perumal-tanjore",
      "category": "Perumal",
      "coverImage": "/assets/products/perumal/002/cover.webp",
      "images": [
        "/assets/products/perumal/002/1.webp",
        "/assets/products/perumal/002/2.webp"
      ],
      "sizes": "default",
      "description": "Handcrafted Perumal Tanjore painting symbolizing blessings and prosperity.",
      "seo": {
        "title": "Perumal Tanjore Painting",
        "description": "Divine Lord Perumal Tanjore art with gold foil and stone work.",
        "keywords": ["Perumal Tanjore painting", "Vishnu painting", "Tamil god art"]
      }
    },

    {
      "id": "LAKSHMI-003",
      "title": "Lakshmi Tanjore Painting",
      "slug": "lakshmi-tanjore",
      "category": "Lakshmi",
      "coverImage": "/assets/products/lakshmi/003/cover.webp",
      "images": [
        "/assets/products/lakshmi/003/1.webp",
        "/assets/products/lakshmi/003/2.webp"
      ],
      "sizes": "default",
      "description": "Auspicious Goddess Lakshmi Tanjore art crafted with intricate details.",
      "seo": {
        "title": "Lakshmi Gold Foil Tanjore Painting",
        "description": "Traditional Lakshmi painting crafted using rich gold foil.",
        "keywords": ["Lakshmi painting", "Goddess Tanjore", "Wealth goddess painting"]
      }
    },

    {
      "id": "SARASWATI-004",
      "title": "Saraswati Tanjore Painting",
      "slug": "saraswati-tanjore",
      "category": "Saraswati",
      "coverImage": "/assets/products/saraswati/004/cover.webp",
      "images": [
        "/assets/products/saraswati/004/1.webp",
        "/assets/products/saraswati/004/2.webp"
      ],
      "sizes": "default",
      "description": "Elegant Saraswati Tanjore painting perfect for homes and institutions.",
      "seo": {
        "title": "Goddess Saraswati Tanjore Painting",
        "description": "Beautifully detailed Saraswati Tanjore painting.",
        "keywords": ["Saraswati art", "Saraswathi Tanjore", "Tamil goddess"]
      }
    },

    {
      "id": "MURUGAN-005",
      "title": "Lord Murugan Tanjore Painting",
      "slug": "murugan-tanjore",
      "category": "Murugan",
      "coverImage": "/assets/products/murugan/005/cover.webp",
      "images": [
        "/assets/products/murugan/005/1.webp",
        "/assets/products/murugan/005/2.webp"
      ],
      "sizes": "default",
      "description": "Vibrant Murugan painting featuring traditional Thanjavur craftsmanship.",
      "seo": {
        "title": "Murugan Tanjore Painting",
        "description": "Authentic Murugan Tanjore art with gold foil and richness.",
        "keywords": ["Murugan painting", "Tamil god", "Tanjore Subramanya"]
      }
    },

    {
      "id": "GANAPATHY-006",
      "title": "Ganapathy Tanjore Painting",
      "slug": "ganapathy-tanjore",
      "category": "Ganapathy",
      "coverImage": "/assets/products/ganapathy/006/cover.webp",
      "images": [
        "/assets/products/ganapathy/006/1.webp",
        "/assets/products/ganapathy/006/2.webp"
      ],
      "sizes": "default",
      "description": "Blessings-filled Ganapathy Tanjore painting using pure gold foil.",
      "seo": {
        "title": "Ganapathy Tanjore Painting",
        "description": "Gold foil Ganapathy painting crafted traditionally.",
        "keywords": ["Ganesh painting", "Pillayar painting", "Tamil god art"]
      }
    },

    {
      "id": "SHIVA-007",
      "title": "Lord Shiva Tanjore Painting",
      "slug": "shiva-tanjore",
      "category": "Shiva",
      "coverImage": "/assets/products/shiva/007/cover.webp",
      "images": [
        "/assets/products/shiva/007/1.webp",
        "/assets/products/shiva/007/2.webp"
      ],
      "sizes": "default",
      "description": "Majestic Lord Shiva Tanjore painting symbolizing divinity and power.",
      "seo": {
        "title": "Shiva Tanjore Painting",
        "description": "Traditional Shiva painting handcrafted with precision.",
        "keywords": ["Shiva painting", "Mahadev Tanjore", "Tamil god paintings"]
      }
    },

    {
      "id": "PARVATI-008",
      "title": "Goddess Parvati Tanjore Painting",
      "slug": "parvati-tanjore",
      "category": "Parvati",
      "coverImage": "/assets/products/parvati/008/cover.webp",
      "images": [
        "/assets/products/parvati/008/1.webp",
        "/assets/products/parvati/008/2.webp"
      ],
      "sizes": "default",
      "description": "Graceful Parvati Tanjore painting reflecting traditional artistry.",
      "seo": {
        "title": "Parvati Tanjore Painting",
        "description": "Divine Parvati Tanjore art in gold foil finish.",
        "keywords": ["Parvati painting", "Amman Tanjore", "Tamil goddess art"]
      }
    },

    {
      "id": "DURGA-009",
      "title": "Durga Devi Tanjore Painting",
      "slug": "durga-tanjore",
      "category": "Durga",
      "coverImage": "/assets/products/durga/009/cover.webp",
      "images": [
        "/assets/products/durga/009/1.webp",
        "/assets/products/durga/009/2.webp"
      ],
      "sizes": "default",
      "description": "Powerful Durga Devi Tanjore art representing strength and protection.",
      "seo": {
        "title": "Durga Devi Tanjore Painting",
        "description": "Traditional Durga Tanjore art with gold foil accents.",
        "keywords": ["Durga painting", "Amman painting", "Tamil Devi art"]
      }
    },

    {
      "id": "KRISHNA-010",
      "title": "Lord Krishna Tanjore Painting",
      "slug": "krishna-tanjore",
      "category": "Krishna",
      "coverImage": "/assets/products/krishna/010/cover.webp",
      "images": [
        "/assets/products/krishna/010/1.webp",
        "/assets/products/krishna/010/2.webp"
      ],
      "sizes": "default",
      "description": "Beautiful Krishna painting capturing divine charm and elegance.",
      "seo": {
        "title": "Krishna Tanjore Painting",
        "description": "Handcrafted Krishna Tanjore painting with rich gold foil work.",
        "keywords": ["Krishna painting", "Tamil god", "Tanjore Krishna"]
      }
    },

    {
      "id": "RADHAKRISHNA-011",
      "title": "Radha Krishna Tanjore Painting",
      "slug": "radhakrishna-tanjore",
      "category": "Radha Krishna",
      "coverImage": "/assets/products/radhakrishna/011/cover.webp",
      "images": [
        "/assets/products/radhakrishna/011/1.webp",
        "/assets/products/radhakrishna/011/2.webp"
      ],
      "sizes": "default",
      "description": "Divine Radha Krishna Tanjore painting symbolizing love and harmony.",
      "seo": {
        "title": "Radha Krishna Tanjore Painting",
        "description": "Traditional love-themed Radha Krishna Tanjore painting.",
        "keywords": ["Radha Krishna painting", "Tanjore love art"]
      }
    },

    {
      "id": "AYYAPPAN-012",
      "title": "Lord Ayyappan Tanjore Painting",
      "slug": "ayyappan-tanjore",
      "category": "Ayyappan",
      "coverImage": "/assets/products/ayyappan/012/cover.webp",
      "images": [
        "/assets/products/ayyappan/012/1.webp",
        "/assets/products/ayyappan/012/2.webp"
      ],
      "sizes": "default",
      "description": "Sacred Ayyappan Tanjore painting radiating positive energy.",
      "seo": {
        "title": "Ayyappan Tanjore Painting",
        "description": "Traditional Swamy Ayyappan gold-foil Tanjore artwork.",
        "keywords": ["Ayyappan painting", "Tamil god", "Sabarimala art"]
      }
    },

    {
      "id": "KARUPUSAMY-013",
      "title": "Karupusamy Tanjore Painting",
      "slug": "karupusamy-tanjore",
      "category": "Karupusamy",
      "coverImage": "/assets/products/karupusamy/013/cover.webp",
      "images": [
        "/assets/products/karupusamy/013/1.webp",
        "/assets/products/karupusamy/013/2.webp"
      ],
      "sizes": "default",
      "description": "Powerful Karupusamy deity painting, crafted in traditional Tanjore style.",
      "seo": {
        "title": "Karupusamy Tanjore Painting",
        "description": " Fierce and divine Karupusamy gold foil Tanjore artwork.",
        "keywords": ["Karupasamy painting", "Tamil folk god"]
      }
    },

    {
      "id": "ANDAL-014",
      "title": "Goddess Andal Tanjore Painting",
      "slug": "andal-tanjore",
      "category": "Andal",
      "coverImage": "/assets/products/andal/014/cover.webp",
      "images": [
        "/assets/products/andal/014/1.webp",
        "/assets/products/andal/014/2.webp"
      ],
      "sizes": "default",
      "description": "Graceful Andal painting crafted in rich Tanjore style.",
      "seo": {
        "title": "Andal Tanjore Painting",
        "description": "Traditional Andal gold foil artwork.",
        "keywords": ["Andal painting", "Tamil goddess", "Nachiyar art"]
      }
    },

    {
      "id": "NARASIMHAR-015",
      "title": "Narasimhar Tanjore Painting",
      "slug": "narasimhar-tanjore",
      "category": "Narasimhar",
      "coverImage": "/assets/products/narasimhar/015/cover.webp",
      "images": [
        "/assets/products/narasimhar/015/1.webp",
        "/assets/products/narasimhar/015/2.webp"
      ],
      "sizes": "default",
      "description": "Majestic Narasimhar painting symbolizing protection.",
      "seo": {
        "title": "Narasimhar Tanjore Painting",
        "description": "Traditional Narasimhar painting with gold foil.",
        "keywords": ["Narasimha painting", "Tamil Vishnu avatar"]
      }
    },

    {
      "id": "RAMA-016",
      "title": "Lord Rama Tanjore Painting",
      "slug": "rama-tanjore",
      "category": "Rama",
      "coverImage": "/assets/products/rama/016/cover.webp",
      "images": [
        "/assets/products/rama/016/1.webp",
        "/assets/products/rama/016/2.webp"
      ],
      "sizes": "default",
      "description": "Elegant Lord Rama painting featuring classic Tanjore detailing.",
      "seo": {
        "title": "Rama Tanjore Painting",
        "description": "Traditional Rama painting for homes and temples.",
        "keywords": ["Rama painting", "Tamil Ram art"]
      }
    },

    {
      "id": "HANUMAN-017",
      "title": "Hanuman Tanjore Painting",
      "slug": "hanuman-tanjore",
      "category": "Hanuman",
      "coverImage": "/assets/products/hanuman/017/cover.webp",
      "images": [
        "/assets/products/hanuman/017/1.webp",
        "/assets/products/hanuman/017/2.webp"
      ],
      "sizes": "default",
      "description": "Devotional Hanuman artwork symbolizing strength and devotion.",
      "seo": {
        "title": "Hanuman Tanjore Painting",
        "description": "Handcrafted Hanuman gold foil painting.",
        "keywords": ["Hanuman painting", "Tamil god", "Anjaneya art"]
      }
    },

    {
      "id": "SAIBABA-018",
      "title": "Sai Baba Tanjore Painting",
      "slug": "sai-baba-tanjore",
      "category": "Sai Baba",
      "coverImage": "/assets/products/saibaba/018/cover.webp",
      "images": [
        "/assets/products/saibaba/018/1.webp",
        "/assets/products/saibaba/018/2.webp"
      ],
      "sizes": "default",
      "description": "Peaceful Sai Baba Tanjore art for spiritual homes.",
      "seo": {
        "title": "Sai Baba Tanjore Painting",
        "description": "Traditional Sai Baba gold foil painting.",
        "keywords": ["Sai Baba painting", "Shirdi Sai art"]
      }
    },

    {
      "id": "DASAVATAR-019",
      "title": "Vishnu Dasavatar Tanjore Painting",
      "slug": "dasavatar-tanjore",
      "category": "Dasavatar",
      "coverImage": "/assets/products/dasavatar/019/cover.webp",
      "images": [
        "/assets/products/dasavatar/019/1.webp",
        "/assets/products/dasavatar/019/2.webp"
      ],
      "sizes": "default",
      "description": "Magnificent Dasavatar painting portraying all ten avatars of Vishnu.",
      "seo": {
        "title": "Dasavatar Tanjore Painting",
        "description": "Traditional Vishnu Dasavatar Tanjore artwork.",
        "keywords": ["Dasavatar painting", "Tamil Vishnu artwork"]
      }
    },

    {
      "id": "ANNAPOORANI-020",
      "title": "Goddess Annapoorani Tanjore Painting",
      "slug": "annapoorani-tanjore",
      "category": "Annapoorani",
      "coverImage": "/assets/products/annapoorani/020/cover.webp",
      "images": [
        "/assets/products/annapoorani/020/1.webp",
        "/assets/products/annapoorani/020/2.webp"
      ],
      "sizes": "default",
      "description": "Traditional Annapoorani Tanjore painting representing abundance.",
      "seo": {
        "title": "Annapoorani Tanjore Painting",
        "description": "Beautifully crafted Goddess Annapoorani artwork.",
        "keywords": ["Annapoorani painting", "Tamil goddess art"]
      }
    }
  ]

  export const Price =  [
    {
      "label": "15x12",
      "price": { "flat": 11500, "twoD": 16000, "threeD": 27000 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "18x14",
      "price": { "flat": 16000, "twoD": 21000, "threeD": 32500 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "20x16",
      "price": { "flat": 21500, "twoD": 25500, "threeD": 38500 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "24x18",
      "price": { "flat": 27500, "twoD": 34000, "threeD": 42500 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "30x24",
      "price": { "flat": 33000, "twoD": 39000, "threeD": 57000 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "36x24",
      "price": { "flat": 42500, "twoD": 53000, "threeD": 81500 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "48x36",
      "price": { "flat": 71500, "twoD": 87500, "threeD": 146000 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "60x36",
      "price": { "flat": 91500, "twoD": 114500, "threeD": 192000 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    },
    {
      "label": "72x48",
      "price": { "flat": 143000, "twoD": 181000, "threeD": 291500 },
      "stock": { "flat": true, "twoD": true, "threeD": true }
    }
  ]