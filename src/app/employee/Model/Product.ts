export interface Products {
    id : any,
    image: string;
    barcode: string;
    name: string;
    category: string;
    vat: number;
    branch: string;
    stock: number 
    costPrice: number
    sellPrice: number 
    expiredDate: Date;
    supplier: string
  }