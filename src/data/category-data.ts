import { Category, SubCategory } from "../types/Catogory";

export const sampleSubCategory: Array<SubCategory[]> = [
  [
    { id: "1-1", name: "Gaming", slug: "gaming-laptops" },
    { id: "1-2", name: "Business", slug: "business-laptops" },
    { id: "1-3", name: "Ultrabooks", slug: "ultrabooks" },
    { id: "1-4", name: "2-in-1", slug: "convertible-laptops" },
  ],
  [
    { id: "2-1", name: "Mice", slug: "mice" },
    { id: "2-2", name: "Keyboards", slug: "keyboards" },
    { id: "2-3", name: "Headphones", slug: "headphones" },
    { id: "2-4", name: "Chargers", slug: "chargers" },
  ],
  [
    { id: "3-1", name: "RAM", slug: "ram" },
    { id: "3-2", name: "SSD", slug: "ssd" },
    { id: "3-3", name: "Graphics Cards", slug: "graphics-cards" },
  ],
  [
    { id: "4-1", name: "Gaming", slug: "gaming-monitors" },
    { id: "4-2", name: "Office", slug: "office-monitors" },
    { id: "4-3", name: "Ultrawide", slug: "ultrawide-monitors" },
  ],
  [
    { id: "5-1", name: "Operating Systems", slug: "operating-systems" },
    { id: "5-2", name: "Office Suites", slug: "office-suites" },
    { id: "5-3", name: "Antivirus", slug: "antivirus" },
  ],
] 

export const sampleCategory: Category[] = [
  {
    id: "1",
    name: "Laptops",
    slug: "laptops",
    subcategories: sampleSubCategory[0],
    url : "",
    amount : 45,
  },
  {
    id: "2",
    name: "Accessories",
    slug: "accessories",
    subcategories: sampleSubCategory[1],
    url : "",
    amount : 37,
  },
  {
    id: "3",
    name: "Components",
    slug: "components",
    subcategories: sampleSubCategory[2],
    url : "",
    amount : 12,
  },
  {
    id: "4",
    name: "Monitors",
    slug: "monitors",
    subcategories: sampleSubCategory[3],
    url : "",
    amount : 23,
  },
  {
    id: "5",
    name: "Software",
    slug: "software",
    subcategories: sampleSubCategory[4],
    url : "",
    amount : 20,
  },
]

export default sampleCategory