import { PaymentOption } from "./Payment";

export interface Staffs {  
    userId : number,
    name : string,
    role : string,
    email : string,
    phoneNumber : string,
    hasAccess : boolean,
  }

export interface Users {
    userId : number,
    userName : string,
    email : string,
    password : string,
    isMember : boolean,
    memberTier : MemberTier ,
    payment : PaymentOption,
}

export interface MemberTier {
  id : number,
  title : string,
  description : string,
  color : string,
  price : number,
  benefits : string[],
}