
export interface SellItem {
    productId: number;
    quantity: number;
    price: number;
    total: number;
    customerName: String;
  }
  
  export interface Sell {
    id?: number;
    customerName: String;
    items: SellItem[];
    totalAmount: number;
  }
  