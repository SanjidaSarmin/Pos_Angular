export interface Product {
    id: number;
    image: string;
    name: string;
    barcode: string;
    vat: number;
    stock: number;
    costPrice: number;
    sellPrice: number;
    expiredDate: string;
    dateCreated: string;
    lastUpdated: string;
    categoryId: number;
    branchId: number;
    supplierId: number;
  }