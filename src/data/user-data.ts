import { MemberTier, Staffs, Users } from "../types/Users";

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
      memberTier : "Gold",
    },
    {
      userId : 24615,
      userName : "Caroli.Mas",
      email : "ifmi@wor.rw",
      password : "xGMbrL9YK7Kb7Mlmxyg",
      isMember : false,
      memberTier : "Regular",
    },
    {
      userId : 70368,
      userName : "MarkWade24",
      email : "dozkuf@medudcad.io",
      password : "h1uAnya",
      isMember : false,
      memberTier : "Regular",
    },
]

export const sampleTier : MemberTier[] = [
    {
      id : 0,
      title : "Regular",
      color : "Red",
    }
]