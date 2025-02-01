import { MemberTier, Staffs, Users } from "../types/Users";

export const sampleTier : MemberTier[] = [
  {
    id : 0,
    title : "Regular",
    color : "Red",
  },
  {
    id : 1,
    title : "Silver",
    color : "lightgray",
  },
  {
    id : 2,
    title : "Gold",
    color : "yellow",
  },
  {
    id : 3,
    title : "Platinum",
    color : "gray",
  },
  {
    id : 4,
    title : "Diamond",
    color : "blue",
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
    {
      userId : 4,
      name : "Wesley Byrd",
      role : "Electronic Specialists",
      email : "http://mamo.ca/liv",
      phoneNumber : "http://ihfaw.cd/vaika",
      hasAccess : false,
    },
  ]

export const sampleUsers : Users[] = [
    {
      userId : 49731,
      userName : "Joel_Marshall",
      email : "awasi@zar.kp",
      password : "jKUsCJtLzWAcw",
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