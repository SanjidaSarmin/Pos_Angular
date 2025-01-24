import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReturnService } from 'src/app/employee/Service/Return/return.service';

@Component({
  selector: 'app-return-add',
  templateUrl: './return-add.component.html',
  styleUrls: ['./return-add.component.scss']
})
export class ReturnAddComponent  implements OnInit{
 
  constructor(
    private returnService : ReturnService,
    private router : Router
  ){}

  returnForm: FormGroup = new FormGroup({
    invoice: new FormControl(),
    branchName: new FormControl(),
    customerName: new FormControl(),
    orderDate: new FormControl(),
    returnDate: new FormControl(),
    productName: new FormControl(),
    productPrice: new FormControl(),
    returnQuantity: new FormControl(),
    returnAmount: new FormControl(),
    receivedBy: new FormControl(),
  });

  branches: string[] = ['Branch 1', 'Branch 2', 'Branch 3'];


  onSubmit(){
    this.returnService.addData(this.returnForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/employee/return')
    })
  }
  ngOnInit(): void {}

}
