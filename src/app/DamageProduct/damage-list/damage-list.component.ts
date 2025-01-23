import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/Service/Damage/damage.service';

@Component({
  selector: 'app-damage-list',
  templateUrl: './damage-list.component.html',
  styleUrls: ['./damage-list.component.scss']
})
export class DamageListComponent implements OnInit{
  constructor(
    private damageService : DamageService
   ){}

   
   damageList: any[] = [];

  ngOnInit(): void {
     this.damageService.getAllData().subscribe((val : any) => {
      this.damageList = val  
    })
  }
  entries = 10;
  searchText = '';
 

}