import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/Notification/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(
    private notificationService: NotificationService) { }

  activeDropdown: string | null = null;
  notificationsCount = 0;
  notifications: { message: string; time: Date }[] = [];
  isDropdownVisible: boolean = false;

  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
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
    window.location.href = "/login";
  }
}
