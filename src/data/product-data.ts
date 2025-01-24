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
];

export default sampleProduct;
