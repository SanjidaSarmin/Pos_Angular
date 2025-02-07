import { Component } from '@angular/core';
import { NotificationService } from 'src/app/Service/Notification/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
      private notificationService: NotificationService) { }

  activeDropdown: string | null = null;
  notificationsCount = 0;
  notifications: { message: string; time: Date }[] = [];
  isDropdownVisible: boolean = false;


  showDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  

  

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });

    this.notificationService.notificationsCount$.subscribe(count => {
      this.notificationsCount = count;
    });
  }
  clearNotifications() {
    this.notificationService.clearNotifications();
  }

  
  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href="/login";
    }
 

}
