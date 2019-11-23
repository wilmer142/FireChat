import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = '';
  elemento:any;

  constructor(public chatService:ChatService) { 
    this.chatService.cargarMensajes()
    .subscribe( () => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then( () => {
        this.mensaje = "";
      }).catch( (err) => {
        console.log('Error al enviar', err);
      });

    
  }

}
