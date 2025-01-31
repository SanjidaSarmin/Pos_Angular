import { Component, OnInit } from '@angular/core';
import { Tasks } from '../Models/Tasks';
import { WebsocketService } from '../Service/WebSocket/web-socket.service';

@Component({
  selector: 'app-web-socket-messaging',
  templateUrl: './web-socket-messaging.component.html',
  styleUrls: ['./web-socket-messaging.component.scss']
})
export class WebSocketMessagingComponent {
  tasks: Tasks[] = [];
  newTaskName: string = '';
  newTaskDays: number = 0;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    // Listen for incoming tasks
    this.websocketService.listen((receivedTasks: Tasks[]) => {
      console.log(receivedTasks);
      
      this.tasks = receivedTasks;
    });
  }


  sendTask(): void {
    if (this.newTaskName && this.newTaskDays) {
      const newTask: Tasks = {
        name: this.newTaskName,
        days: this.newTaskDays
      };
      console.log(newTask);
      
      console.log("ddddddddddddfdffffffffffffffffffffffff");
      this.websocketService.send(newTask);
      

      // Reset input fields
      this.newTaskName = '';
      this.newTaskDays = 0;
    }
  }



  
}
