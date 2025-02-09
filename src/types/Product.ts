export interface Product {
    id : number,
    title : string,
    description : string,
    url : string,
    category : string,
    price : number,
    amount : number,
    version1 : Version[],
    version2 : Version[] | null,
}

export type Version = {
    id : number,
    title : string
}