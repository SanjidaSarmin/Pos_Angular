import { ProductService } from './../../../../Service/Product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReturnService } from 'src/app/Service/Return/return.service';
import { SellService } from 'src/app/Service/Sell/sell.service';

@Component({
  selector: 'app-return-add',
  templateUrl: './return-add.component.html',
  styleUrls: ['./return-add.component.scss']
})
export class ReturnAddComponent implements OnInit{
 
  constructor(
    private returnService : ReturnService,
    private saleService : SellService,
    private productService : ProductService,
    private router : Router
  ){}
  productList: any[]= [];
  sellList: any[]= [];

  returnForm: FormGroup = new FormGroup({
    saleId: new FormControl(), 
    customerPhone: new FormControl(),
    orderDate: new FormControl(),
    returnDate: new FormControl(),
    productId: new FormControl(),
    returnQuantity: new FormControl(),
    returnAmount: new FormControl(),
    receivedBy: new FormControl(),
  });




  onSubmit(){
    this.returnService.addData(this.returnForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/manager/return')
    })
  }
  ngOnInit(): void {
    this.productService.getAllData().subscribe((val : any) => {
      this.productList = val  
    })
    this.saleService.getAllData().subscribe((val : any) => {
      this.sellList = val  
    })
  }

}
