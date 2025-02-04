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
  product: any[]= [];
  sell: any[]= [];

  returnForm: FormGroup = new FormGroup({
    saleId: new FormControl(),
    branchName: new FormControl(),
    customerName: new FormControl(),
    orderDate: new FormControl(),
    returnDate: new FormControl(),
    customerPhone: new FormControl(),
    productPrice: new FormControl(),
    returnQuantity: new FormControl(),
    returnAmount: new FormControl(),
    receivedBy: new FormControl(),
  });

  branches: string[] = ['Branch 1', 'Branch 2', 'Branch 3'];


  onSubmit(){
    this.returnService.addData(this.returnForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/manager/return')
    })
  }
  ngOnInit(): void {
    this.productService.getAllData().subscribe((val : any) => {
      this.product = val  
    })
    this.saleService.getAllData().subscribe((val : any) => {
      this.sell = val  
    })
  }

}
