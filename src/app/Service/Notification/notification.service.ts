import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: { message: string; time: Date }[] = [];
  private notificationsSubject = new BehaviorSubject(this.notifications);
  private notificationsCountSubject = new BehaviorSubject<number>(0);

  notifications$ = this.notificationsSubject.asObservable();
  notificationsCount$ = this.notificationsCountSubject.asObservable();

  constructor() {
    this.loadNotifications(); // Load stored notifications when service is initialized
  }

  private loadNotifications() {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    this.notifications = storedNotifications;
    this.notificationsSubject.next(this.notifications);
    this.notificationsCountSubject.next(this.notifications.length);
  }

  addNotification(message: string) {
    // Check if this notification already exists (prevent duplicates)
    const exists = this.notifications.some(notification => notification.message === message);
    if (exists) return; // If the notification already exists, don't add it again

    const newNotification = { message, time: new Date() };
    this.notifications.unshift(newNotification); // Add new notification at the top

    // Save updated notifications to localStorage
    localStorage.setItem('notifications', JSON.stringify(this.notifications));

    // Notify all subscribers
    this.notificationsSubject.next(this.notifications);
    this.notificationsCountSubject.next(this.notifications.length);
  }

  clearNotifications() {
    this.notifications = [];
    localStorage.removeItem('notifications');
    this.notificationsSubject.next([]);
    this.notificationsCountSubject.next(0);
  }


  // showNotification(message: string) {
  //   const newNotification = { message, time: new Date() };
  //   this.notifications.unshift(newNotification); // Add new notification at the top
  //   this.notificationsSubject.next(this.notifications); // Update notification list
  //   this.notificationsCount.next(this.notifications.length); // Update count
  //   console.log('Notification sent:', newNotification);
  // }

  // clearNotifications() {
  //   this.notifications = [];
  //   this.notificationsSubject.next(this.notifications);
  //   this.notificationsCount.next(0);
  // }



  // private notifications: string[] = [];
  // private notificationsCount = new BehaviorSubject<number>(0);

  // notificationsCount$ = this.notificationsCount.asObservable();

  // showNotification(message: string) {
  //   this.notifications.push(message);
  //   this.notificationsCount.next(this.notifications.length); // Update count
  // }

  // getNotifications() {
  //   return this.notifications;
  // }
}

