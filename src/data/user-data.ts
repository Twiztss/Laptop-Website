import { Invoice, Status } from "../types/Payment";
import { MemberTier, Staffs, Users } from "../types/Users";
import sampleProduct from "./product-data";

export const sampleTier : MemberTier[] = [
  {
    id : 0,
    title : "Regular",
    color : "black",
    description : "For casual shoppers trying out new products.",
    price : 0,
    benefits : [
      "Basic product access",
      "Standard customer support",
      "Email notifications",
      "Order tracking"
    ],
  },
  {
    id : 1,
    title : "Silver",
    color : "lightgray",
    description : "Offers limited yet beneficial perks for your purchases.",
    price : 1.99,
    benefits : [
      "All Regular features",
      "Priority customer support",
      "5% discount on all orders",
      "Free shipping on orders $50+",
      "Early access to sales"
    ],
  },
  {
    id : 2,
    title : "Gold",
    color : "orange",
    description : "For enthusiast looking for enjoyable discounts.",
    price : 2.99,
    benefits : [
      "All Silver features",
      "10% discount on all orders",
      "Free express shipping",
      "Exclusive member events",
      "Extended return window",
      "Personal shopping assistant"
    ],
  },
  {
    id : 3,
    title : "Platinum",
    color : "gray",
    description : "Provides exotic feature exclusively.",
    price : 3.99,
    benefits : [
      "All Gold features",
      "10% discount on all orders",
      "Free express shipping",
      "Exclusive member events",
      "Extended return window",
      "Personal shopping assistant"
    ],
  },
  {
    id : 4,
    title : "Diamond",
    color : "lightblue",
    description : "Experience ultimate shopping experience.",
    price : 4.99,
    benefits : [
      "All Platinum features",
      "20% discount on all orders",
      "Unlimited free shipping",
      "24/7 dedicated support",
      "Custom product requests",
      "Exclusive member-only products",
      "Priority repair service"
    ],
  },
]

export const sampleStatus : Status[] = [
  {
    id : 0,
    title : "Unpaid",
    color : "lightgray",
  },
  {
    id : 1,
    title : "Pending",
    color : "gray",
  },
  {
    id : 2,
    title : "Delivering",
    color : "purple",
  },
  {
    id : 2,
    title : "Delivered",
    color : "green",
  },
]

export const sampleStaffs : Staffs[] = [
    {
      userId : 0,
      name : "Victoria Morton",
      role : "Director",
      email : "http://afbo.mh/je",
      phoneNumber : "http://afbo.mh/je",
      hasAccess : true,
    },
    {
      userId : 1,
      name : "Curtis Austin",
      role : "Substitute",
      email : "http://ihfaw.cd/vaika",
      phoneNumber : "http://ihfaw.cd/vaika",
      hasAccess : false,
    },
    {
      userId : 2,
      name : "Nancy Keller",
      role : "Vice President",
      email : "http://fi.nu/lecnemuz",
      phoneNumber : "http://ihfaw.cd/vaika",
      hasAccess : true,
    },
    {
      userId : 3,
      name : "Mabel Brown",
      role : "Support Specialist",
      email : "http://sev.pl/omuiwo",
      phoneNumber : "http://ihfaw.cd/vaika",
      hasAccess : true,
    },
  ]

export const sampleUsers : Users[] = [
    {
      userId : 49731,
      userName : "Joel_Marshall",
      email : "awasi@zar.kp",
      password : "jKUsCJtLzWAcw",
      phoneNumber : 2063428631,
      description : "Ad ex est officia fugiat minim anim do ex duis velit aute.",
      isMember : true,
      memberTier : sampleTier[0],
      payment : {
        option : "Mastercard",
        cardName : "Carolina Masery",
        cardNumber : 7978701,
        cvv : 308,
        date : new Date(),
        billingAddress : {
          address1 : "789 Oak Drive",
          address2 : "Floor 3",
          state : "San Salvador",
          postal : "1101",
          country : "El Salvador",
        },
      }
    },
    {
      userId : 24615,
      userName : "Caroli.Mas",
      email : "ifmi@wor.rw",
      password : "xGMbrL9YK7Kb7Mlmxyg",
      phoneNumber : 7175501675,
      description : "Ut exercitation mollit ipsum dolor officia sint aute.",
      isMember : false,
      memberTier : sampleTier[3],
      payment : {
        option : "Mastercard",
        cardName : "Carolina Masery",
        cardNumber : 7978701,
        cvv : 308,
        date : new Date(),
        billingAddress : {
          address1 : "123 Maple Street",
          address2 : "Apartment 4B",
          state : "California",
          postal : "90210",
          country : "USA",
        },
      }
    },
    {
      userId : 70368,
      userName : "MarkWade24",
      email : "dozkuf@medudcad.io",
      password : "h1uAnya",
      phoneNumber : 2487620356,
      description : "Est culpa irure eu aliquip sint.",
      isMember : false,
      memberTier : sampleTier[1],
      payment : {
        option : "Visa",
        cardName : "Marcus Wade",
        cardNumber : 8844737,
        cvv : 790,
        date : new Date(),
        billingAddress : {
          address1 : "456 Elm Avenue",
          address2 : "Suite 12",
          state : "Ontario",
          postal : "M5H2N2",
          country : "Canada",
        },
      }
    },
]

export const sampleInvoice : Invoice[] = [
  {
    id : "P3fn6q6mM",
    product : [sampleProduct[2], sampleProduct[0]],
    status : sampleStatus[0],
    amount : 2,
    totalPrice : sampleProduct[2].price + sampleProduct[0].price,
  },
  {
    id : "oMxvl7ZaUP",
    product : [sampleProduct[1]],
    status : sampleStatus[0],
    amount : 1,
    totalPrice : sampleProduct[1].price,
  },
  {
    id : "FQ0Je2Fk",
    product : [sampleProduct[1], sampleProduct[2], sampleProduct[3]],
    status : sampleStatus[3],
    amount : 3,
    totalPrice : sampleProduct[1].price + sampleProduct[2].price + sampleProduct[3].price
  },
]