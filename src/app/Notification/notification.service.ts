import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: { message: string; time: Date }[] = [];
  private notificationsSubject = new BehaviorSubject(this.notifications);
  private notificationsCount = new BehaviorSubject<number>(0);

  notifications$ = this.notificationsSubject.asObservable();
  notificationsCount$ = this.notificationsCount.asObservable();

  showNotification(message: string) {
    const newNotification = { message, time: new Date() };
    this.notifications.unshift(newNotification); // Add new notification at the top
    this.notificationsSubject.next(this.notifications); // Update notification list
    this.notificationsCount.next(this.notifications.length); // Update count
  }

  clearNotifications() {
    this.notifications = [];
    this.notificationsSubject.next(this.notifications);
    this.notificationsCount.next(0);
  }
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

