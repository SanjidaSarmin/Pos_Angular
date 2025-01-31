import { Component, OnInit } from '@angular/core';
import { SellReportService } from 'src/app/Service/Sell/sell-report.service';

@Component({
  selector: 'app-sell-report',
  templateUrl: './sell-report.component.html',
  styleUrls: ['./sell-report.component.scss']
})
export class SellReportComponent implements OnInit{

  constructor(
      private sellService: SellReportService
    ) { }
  
  
    saleList: any[] = [];
  
    ngOnInit(): void {
      this.sellService.getAllData().subscribe((val: any) => {
        this.saleList = val
      })
    }
 

}
