import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  
  //inputs que reciben valores desde header.html (binding del padre al hijo)
  @Input() color: string="";
  @Input() texto: string="";

  //output que emite un evento a header.html
  @Output() botonClick = new EventEmitter()

  //evento del boton.html que emite un llamado a otro evento en header.html (¿binding del hijo al padre?)
  eventoClick(){
    this.botonClick.emit();
  }

}
