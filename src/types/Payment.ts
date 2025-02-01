export interface PaymentOption {
    option : string,
    cardName : string,
    cardNumber : number,
    cvv : number,
    date : Date,
    billingAddress : Address,
}

export interface Address {
    address1 : string | null,
    address2 : string | null,
    state : string,
    postal : string,
    country : string,
}