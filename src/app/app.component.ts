import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './Service/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'POS_Project';
  constructor(private apiService: AuthService){}
  sharedMessage: string = '';
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message =>
      this.sharedMessage = message);
    
    }
  
}
