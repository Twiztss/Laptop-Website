import { Product, Version } from "../types/Product";
import sampleCategory from "./category-data";


const sampleVersion1 : Version[] = [
    {id : 0, title : "Red"},
    {id : 1, title : "Blue"},
    {id : 2, title : "Yellow"},
    {id : 3, title : "Silver"},
    {id : 4, title : "White"},
    {id : 5, title : "Jet Black"},
]

const sampleVersion2 : Version[] = [
    {id : 5, title : "512 GB"},
    {id : 6, title : "1 TB"},
    {id : 7, title : "2 TB"},
]

const sampleProduct : Product[] = [
    {
        id: 0,
        title: "Product 1",
        description: "This is a description for sample item 1.",
        category: sampleCategory[0].name,
        url : "",
        price: 29.99,
        amount : 72,
        version1 : sampleVersion1.slice(1,5),
        version2 : sampleVersion2
    },
    {
        id: 1,
        title: "Product 2",
        description: "This is a description for sample item 2.",
        category: sampleCategory[1].name,
        url : "",
        price: 19.99,
        amount : 40,
        version1 : sampleVersion1,
        version2 : null,
    },
    {
        id: 2,
        title: "Product 3",
        description: "This is a description for sample item 3.",
        category: sampleCategory[2].name,
        url : "",
        price: 39.99,
        amount : 29,
        version1 : sampleVersion1.slice(2,5),
        version2 : sampleVersion2.slice(0,2),
    },
    {
        id: 3,
        title: "Product 4",
        description: "This is a description for sample item 4.",
        category: sampleCategory[2].name,
        url : "",
        price: 19.99,
        amount : 3,
        version1 : sampleVersion1.slice(1,4),
        version2 : sampleVersion2,
    },
    {
        id: 4,
        title: "Product 5",
        description: "This is a description for sample item 5.",
        category: sampleCategory[2].name,
        url : "",
        price: 9.99,
        amount : 47,
        version1 : sampleVersion1,
        version2 : sampleVersion2.slice(0,2),
    },
    {
        id: 5,
        title: "Product 6",
        description: "This is a description for sample item 6.",
        category: sampleCategory[2].name,
        url : "",
        price: 49.99,
        amount : 12,
        version1 : sampleVersion1.slice(2,4),
        version2 : [sampleVersion2[1]],
    },
    {
        id: 6,
        title: "Product 7",
        description: "This is a description for sample item 7.",
        category: sampleCategory[2].name,
        url : "",
        price: 39.99,
        amount : 15,
        version1 : sampleVersion1.slice(1,4),
        version2 : [sampleVersion2[3]],
    },
];

export default sampleProduct;
