import { Product } from "./Product";

export interface PaymentOption {
    option : string,
    cardName : string,
    cardNumber : number,
    cvv : number,
    date : Date,
    billingAddress : Address,
}

export interface Invoice {
    id : string,
    product : Product[],
    status : Status,
    amount : number,
    totalPrice : number,
}

export interface Status {
    id : number,
    title : string,
    color : string,
} 

export interface Address {
    address1 : string,
    address2 : string,
    state : string,
    postal : string,
    country : string,
}