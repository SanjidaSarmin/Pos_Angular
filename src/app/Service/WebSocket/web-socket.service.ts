import { Injectable, OnDestroy } from '@angular/core';
import { CompatClient, Stomp, StompSubscription } from '@stomp/stompjs';
import { Tasks } from 'src/app/Models/Tasks';


export type ListenerCallBack = (tasks: Tasks[]) => void; 


@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnDestroy {

  private connection: CompatClient | undefined = undefined;
  private subscription: StompSubscription | undefined;

  constructor() {
    this.connection = Stomp.client('ws://192.168.20.136:8080/websocket');
    this.connection.connect({}, () => {});
  }

  public send(task: Tasks): void {
    console.log(task);
    
    if (this.connection && this.connection.connected) {
      this.connection.send('/dashboard/add_new_task', {}, JSON.stringify(task));
    }
  }

  public listen(fun: ListenerCallBack): void {
    if (this.connection) {
      this.connection.connect({}, () => {
        this.subscription = this.connection!.subscribe('/tasks/added_task', message => {
          const tasks: Tasks[] = JSON.parse(message.body); // Parsing the response as an array of tasks
          fun(tasks); 
        });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
