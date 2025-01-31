import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DamageService } from 'src/app/Service/Damage/damage.service';

@Component({
  selector: 'app-damage-edit',
  templateUrl: './damage-edit.component.html',
  styleUrls: ['./damage-edit.component.scss']
})
export class DamageEditComponent implements OnInit{
 
  id!: any;
  damageData! : any;

  constructor(
    private damageService : DamageService,
    private router : Router,
    private route : ActivatedRoute,
  ){}

  damageForm : FormGroup = new FormGroup({
  id: new FormControl(),
  date: new FormControl(),
  branch: new FormControl(),
  productName: new FormControl(),
  damagedStock: new FormControl(),
  reason: new FormControl()
  })

  onSubmit(){
    this.damageService.updateData(this.damageForm.value).subscribe((val : any) => {
      console.log("updated succesfully");
      this.router.navigateByUrl('/employee/damageList')
    })
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['dId'];
    this.damageService.getById(this.id).subscribe((val: any) => {
     this.damageData= val;
     this.damageForm.patchValue(this.damageData);
    })
  }

}
