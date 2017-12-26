import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8069')
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        ()  => console.log(' stream is over')
      );
  }

  sendMessageToServe() {
    this.wsService.sendMessage('hello form client');
  }

}
