import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DamageService } from 'src/app/Service/Damage/damage.service';

@Component({
  selector: 'app-damage-add',
  templateUrl: './damage-add.component.html',
  styleUrls: ['./damage-add.component.scss']
})
export class DamageAddComponent implements OnInit{
 
  constructor(
    private damageService : DamageService,
    private router : Router
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
    this.damageService.addData(this.damageForm.value).subscribe((val : any) => {
      console.log("created succesfully");
      this.router.navigateByUrl('/damageList')
    })
  }
  ngOnInit(): void {}

}
