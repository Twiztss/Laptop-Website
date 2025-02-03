import { Product } from "../types/Product";
import sampleCategory from "./category-data";

const sampleProduct : Product[] = [
    {
        id: 0,
        title: "Product 1",
        description: "This is a description for sample item 1.",
        category: sampleCategory[0].name,
        url : "",
        price: 29.99,
        amount : 72,
    },
    {
        id: 1,
        title: "Product 2",
        description: "This is a description for sample item 2.",
        category: sampleCategory[1].name,
        url : "",
        price: 19.99,
        amount : 40,
    },
    {
        id: 2,
        title: "Product 3",
        description: "This is a description for sample item 3.",
        category: sampleCategory[2].name,
        url : "",
        price: 39.99,
        amount : 29,
    },
    {
        id: 3,
        title: "Product 4",
        description: "This is a description for sample item 4.",
        category: sampleCategory[2].name,
        url : "",
        price: 19.99,
        amount : 3,
    },
    {
        id: 4,
        title: "Product 5",
        description: "This is a description for sample item 5.",
        category: sampleCategory[2].name,
        url : "",
        price: 9.99,
        amount : 47,
    },
    {
        id: 5,
        title: "Product 6",
        description: "This is a description for sample item 6.",
        category: sampleCategory[2].name,
        url : "",
        price: 49.99,
        amount : 12,
    },
];

export default sampleProduct;
