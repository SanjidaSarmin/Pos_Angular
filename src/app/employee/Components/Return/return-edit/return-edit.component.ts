import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnService } from 'src/app/employee/Service/Return/return.service';

@Component({
  selector: 'app-return-edit',
  templateUrl: './return-edit.component.html',
  styleUrls: ['./return-edit.component.scss']
})
export class ReturnEditComponent implements OnInit{
 
  id! : any;
  returnData! : any;

  constructor(
    private returnService : ReturnService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  returnForm: FormGroup = new FormGroup({
    id: new FormControl(),
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
    this.returnService.updateData(this.returnForm.value).subscribe((val : any) => {
      console.log("ReturnForm updated succesfully");
      this.router.navigateByUrl('/employee/return')
    })
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['rId'];
    this.returnService.getById(this.id).subscribe((val: any) => {
     this.returnData= val;
     this.returnForm.patchValue(this.returnData);
    })
  }

}

