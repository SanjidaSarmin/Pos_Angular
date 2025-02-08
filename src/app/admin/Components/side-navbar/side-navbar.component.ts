import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/Notification/notification.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  constructor(
    private notificationService: NotificationService) { }

  activeDropdown: string | null = null;
  notificationsCount = 0;
  notifications: { message: string; time: Date }[] = [];
  isDropdownVisible: boolean = false;


  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }

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

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href="/login";
    }
}
