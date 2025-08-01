import { Product, Version } from "../types/Product";
import sampleCategory from "./category-data";

// Color options for laptops and accessories
const colorVersions: Version[] = [
    {id: 0, title: "Space Gray"},
    {id: 1, title: "Silver"},
    {id: 2, title: "Rose Gold"},
    {id: 3, title: "Jet Black"},
    {id: 4, title: "White"},
    {id: 5, title: "Midnight Blue"},
    {id: 6, title: "Forest Green"},
    {id: 7, title: "Crimson Red"},
]

// Storage options for laptops and components
const storageVersions: Version[] = [
    {id: 8, title: "256 GB SSD"},
    {id: 9, title: "512 GB SSD"},
    {id: 10, title: "1 TB SSD"},
    {id: 11, title: "2 TB SSD"},
    {id: 12, title: "4 TB SSD"},
]

// RAM options for laptops and components
const ramVersions: Version[] = [
    {id: 13, title: "8 GB DDR4"},
    {id: 14, title: "16 GB DDR4"},
    {id: 15, title: "32 GB DDR4"},
    {id: 16, title: "64 GB DDR4"},
]

// Size options for monitors
const sizeVersions: Version[] = [
    {id: 17, title: "24 inch"},
    {id: 18, title: "27 inch"},
    {id: 19, title: "32 inch"},
    {id: 20, title: "34 inch Ultrawide"},
    {id: 21, title: "49 inch Super Ultrawide"},
]

// Switch options for keyboards
const switchVersions: Version[] = [
    {id: 22, title: "Cherry MX Red"},
    {id: 23, title: "Cherry MX Blue"},
    {id: 24, title: "Cherry MX Brown"},
    {id: 25, title: "Cherry MX Silent"},
]

const sampleProduct: Product[] = [
    {
        id: 0,
        title: "MacBook Pro 14-inch M3 Pro",
        description: "Powerful laptop featuring Apple's M3 Pro chip, 14-inch Liquid Retina XDR display, and up to 22 hours of battery life. Perfect for professional work, video editing, and development.",
        category: sampleCategory[0].name,
        url: "/products/macbook-pro-14-m3",
        price: 1999.99,
        amount: 15,
        version1: colorVersions.slice(0, 3), // Space Gray, Silver, Rose Gold
        version2: storageVersions.slice(1, 4) // 512GB, 1TB, 2TB
    },
    {
        id: 1,
        title: "Dell XPS 13 Plus",
        description: "Ultra-slim 13.4-inch laptop with Intel Core i7 processor, 3.5K OLED touch display, and premium build quality. Ideal for business professionals and creative work.",
        category: sampleCategory[0].name,
        url: "/products/dell-xps-13-plus",
        price: 1499.99,
        amount: 28,
        version1: colorVersions.slice(1, 4), // Silver, Rose Gold, Jet Black
        version2: storageVersions.slice(0, 3) // 256GB, 512GB, 1TB
    },
    {
        id: 2,
        title: "ASUS ROG Strix G16",
        description: "Gaming laptop with NVIDIA RTX 4070, Intel Core i7-13700H, 16-inch QHD display with 240Hz refresh rate. Designed for serious gamers and content creators.",
        category: sampleCategory[0].name,
        url: "/products/asus-rog-strix-g16",
        price: 1799.99,
        amount: 12,
        version1: colorVersions.slice(3, 6), // Jet Black, White, Midnight Blue
        version2: storageVersions.slice(2, 5) // 1TB, 2TB, 4TB
    },
    {
        id: 3,
        title: "Logitech MX Master 3S",
        description: "Premium wireless mouse with 8000 DPI sensor, silent clicks, and ergonomic design. Features MagSpeed scroll wheel and up to 70 days of battery life.",
        category: sampleCategory[1].name,
        url: "/products/logitech-mx-master-3s",
        price: 99.99,
        amount: 45,
        version1: colorVersions.slice(0, 3), // Space Gray, Silver, Rose Gold
        version2: null
    },
    {
        id: 4,
        title: "Corsair K100 RGB",
        description: "Mechanical gaming keyboard with Cherry MX Speed Silver switches, per-key RGB lighting, and premium aluminum frame. Includes dedicated media controls and macro keys.",
        category: sampleCategory[1].name,
        url: "/products/corsair-k100-rgb",
        price: 249.99,
        amount: 18,
        version1: colorVersions.slice(3, 5), // Jet Black, White
        version2: switchVersions.slice(0, 3) // Red, Blue, Brown
    },
    {
        id: 5,
        title: "Sony WH-1000XM5",
        description: "Industry-leading noise-canceling headphones with 30-hour battery life, LDAC codec support, and exceptional sound quality. Perfect for travel and professional use.",
        category: sampleCategory[1].name,
        url: "/products/sony-wh-1000xm5",
        price: 399.99,
        amount: 32,
        version1: colorVersions.slice(0, 2), // Space Gray, Silver
        version2: null
    },
    {
        id: 6,
        title: "Samsung 970 EVO Plus 2TB",
        description: "High-performance NVMe SSD with read speeds up to 3,500 MB/s and write speeds up to 3,300 MB/s. 5-year warranty and Samsung Magician software included.",
        category: sampleCategory[2].name,
        url: "/products/samsung-970-evo-plus-2tb",
        price: 189.99,
        amount: 25,
        version1: [colorVersions[0]], // Space Gray
        version2: storageVersions.slice(2, 5) // 1TB, 2TB, 4TB
    },
    {
        id: 7,
        title: "Corsair Vengeance LPX 32GB",
        description: "DDR4 desktop memory kit with XMP 2.0 support, aluminum heat spreader, and optimized for Intel X99 and 100 series motherboards. Low-profile design for compatibility.",
        category: sampleCategory[2].name,
        url: "/products/corsair-vengeance-lpx-32gb",
        price: 129.99,
        amount: 40,
        version1: [colorVersions[0], colorVersions[1]], // Space Gray, Silver
        version2: ramVersions.slice(1, 4) // 16GB, 32GB, 64GB
    },
    {
        id: 8,
        title: "LG 27GP850-B",
        description: "27-inch gaming monitor with 2560x1440 resolution, 165Hz refresh rate, and 1ms response time. Features NVIDIA G-SYNC compatibility and HDR support.",
        category: sampleCategory[3].name,
        url: "/products/lg-27gp850-b",
        price: 449.99,
        amount: 22,
        version1: [colorVersions[0]], // Space Gray
        version2: sizeVersions.slice(1, 3) // 27 inch, 32 inch
    },
    {
        id: 9,
        title: "Samsung Odyssey G9",
        description: "49-inch super ultrawide gaming monitor with 5120x1440 resolution, 240Hz refresh rate, and 1ms response time. Curved design with Quantum Dot technology.",
        category: sampleCategory[3].name,
        url: "/products/samsung-odyssey-g9",
        price: 1299.99,
        amount: 8,
        version1: [colorVersions[0]], // Space Gray
        version2: [sizeVersions[4]] // 49 inch Super Ultrawide
    },
    {
        id: 10,
        title: "Microsoft Office 365 Personal",
        description: "Annual subscription to Microsoft Office 365 including Word, Excel, PowerPoint, Outlook, and 1TB OneDrive cloud storage. Compatible with Windows, Mac, iOS, and Android.",
        category: sampleCategory[4].name,
        url: "/products/microsoft-office-365-personal",
        price: 69.99,
        amount: 150,
        version1: [colorVersions[0]], // Space Gray
        version2: null
    },
    {
        id: 11,
        title: "Adobe Creative Cloud",
        description: "Complete creative software suite including Photoshop, Illustrator, InDesign, Premiere Pro, and more. Includes 100GB cloud storage and access to Adobe Fonts.",
        category: sampleCategory[4].name,
        url: "/products/adobe-creative-cloud",
        price: 599.99,
        amount: 85,
        version1: [colorVersions[0]], // Space Gray
        version2: null
    },
    {
        id: 12,
        title: "Lenovo ThinkPad X1 Carbon",
        description: "Premium business laptop with Intel Core i7, 14-inch 4K display, and military-grade durability. Features ThinkPad keyboard and extensive security features.",
        category: sampleCategory[0].name,
        url: "/products/lenovo-thinkpad-x1-carbon",
        price: 1899.99,
        amount: 19,
        version1: colorVersions.slice(0, 2), // Space Gray, Silver
        version2: storageVersions.slice(1, 4) // 512GB, 1TB, 2TB
    },
    {
        id: 13,
        title: "Razer DeathAdder V3 Pro",
        description: "Wireless gaming mouse with 30K DPI sensor, 70-hour battery life, and ultra-lightweight design. Features Razer HyperSpeed wireless technology and optical switches.",
        category: sampleCategory[1].name,
        url: "/products/razer-deathadder-v3-pro",
        price: 159.99,
        amount: 35,
        version1: [colorVersions[3], colorVersions[4]], // Jet Black, White
        version2: null
    },
    {
        id: 14,
        title: "NVIDIA RTX 4080 Founders Edition",
        description: "High-end graphics card with 16GB GDDR6X memory, ray tracing capabilities.",
        category: sampleCategory[2].name,
        url: "/products/nvidia-rtx-4080-founders",
        price: 1199.99,
        amount: 6,
        version1: [colorVersions[0]], // Space Gray
        version2: null
    }
];

export default sampleProduct;
