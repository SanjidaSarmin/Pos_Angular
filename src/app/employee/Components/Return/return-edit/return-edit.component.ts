import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ReturnService } from 'src/app/Service/Return/return.service';
import { SellService } from 'src/app/Service/Sell/sell.service';

@Component({
  selector: 'app-return-edit',
  templateUrl: './return-edit.component.html',
  styleUrls: ['./return-edit.component.scss']
})
export class ReturnEditComponent implements OnInit {

  id!: any;
  returnData!: any;
  productList: any[] = [];
  sellList: any[] = [];

  constructor(
    private returnService: ReturnService,
    private saleService: SellService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  returnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    saleId: new FormControl(), 
    customerPhone: new FormControl(),
    orderDate: new FormControl(),
    returnDate: new FormControl(),
    productId: new FormControl(),
    returnQuantity: new FormControl(),
    returnAmount: new FormControl(),
    receivedBy: new FormControl(),
  });


  onSubmit() {
    this.returnService.updateData(this.returnForm.value).subscribe((val: any) => {
      console.log("ReturnForm updated succesfully");
      this.router.navigateByUrl('/employee/return')
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['rId'];
    this.returnService.getById(this.id).subscribe((val: any) => {
      this.returnData = val;
      this.returnForm.patchValue(this.returnData);
    })

    this.productService.getAllData().subscribe((val : any) => {
      this.productList = val  
    })
    this.saleService.getAllData().subscribe((val : any) => {
      this.sellList = val  
    })
  }

}
