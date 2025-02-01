import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  activeDropdown: string | null = null;
  notificationsCount = 3;
  onNotificationClick(): void {
    if (this.notificationsCount > 0) {
      console.log('Redirecting to notifications page...');
    } else {
      console.log('No new notifications.');
    }
  }

  // Simulate notification count update (e.g., from a service)
  updateNotifications(count: number): void {
    this.notificationsCount = count;
    console.log(`Notifications updated: ${this.notificationsCount}`);
  }

  // Toggle dropdown visibility
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
