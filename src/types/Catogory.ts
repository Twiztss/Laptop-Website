export type Category = {
  id: string
  name: string
  slug: string
  subcategories?: SubCategory[],
  url : string,
  amount : number,
}

export type SubCategory = {
  id: string
  name: string
  slug: string
}