import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/branch-manager/Service/category/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit{

  id! : any;
  categoryData! : any;
 
  constructor(
    private categoryService : CategoryService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
  });




  onSubmit(){
    this.categoryService.updateData(this.categoryForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/employee/return')
    })
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['cId'];
    this.categoryService.getById(this.id).subscribe((val: any) => {
     this.categoryData= val;
     this.categoryForm.patchValue(this.categoryData);
    })
  }
}