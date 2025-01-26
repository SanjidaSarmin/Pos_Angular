import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  activeDropdown: string | null = null;

  // Toggle dropdown visibility
  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }
}
