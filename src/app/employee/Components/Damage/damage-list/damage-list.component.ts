import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/employee/Service/Damage/damage.service';
import { Damage } from 'src/app/Models/Damage';

@Component({
  selector: 'app-damage-list',
  templateUrl: './damage-list.component.html',
  styleUrls: ['./damage-list.component.scss']
})
export class DamageListComponent implements OnInit{
  entries = 10;

  
  constructor(
    private damageService : DamageService
   ){}

   
   damageList: any[] = [];

  ngOnInit(): void {
     this.damageService.getAllData().subscribe((val : any) => {
      this.damageList = val  
      console.log("----------",this.damageList);
      
    })
  }

  deletereturn(id : any){
    this.damageService.deleteById(id).subscribe((val : any) =>{
      console.log("Data deleted");
      this.ngOnInit()
    })
   }

searchTest :string = "";
  search() {
    this.damageService.serarchProduct(this.searchTest).subscribe((val: any) => {
      this.damageList = val
    })
  }
  
 

}