import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit{
 
  constructor(
    private categoryService : CategoryService,
    private router : Router
  ){}

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
  });




  onSubmit(){
    this.categoryService.addData(this.categoryForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/admin/categoryList')
    })
  }
  ngOnInit(): void {}

}