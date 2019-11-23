import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = '';

  constructor(public chatService:ChatService) { 
    this.chatService.cargarMensajes().subscribe();
  }

  ngOnInit() {
  }

  enviarMensaje(){

  }

}
