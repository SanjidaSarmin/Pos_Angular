import { Component, OnInit } from '@angular/core';
import { SellService } from 'src/app/employee/Service/Sell/sell.service';

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.scss']
})
export class SellDetailsComponent implements OnInit {
  sellData: any; // Store the fetched sell data
  sellItems: any[] = []; // Store associated sell items

  constructor(private sellService: SellService) {}

  ngOnInit(): void {
    const sellId = 1; // Replace with dynamic ID if needed
    this.fetchSellDetails(sellId);
  }

  fetchSellDetails(sellId: number): void {
    this.sellService.getSellWithItems(sellId).subscribe(
      (data: any) => {
        this.sellData = data;
        this.sellItems = data.sellItems; // Extract sell items from response
        console.log('Fetched Sell Data:', data);
      },
      (error) => {
        console.error('Error fetching sell details:', error);
      }
    );
  }
}