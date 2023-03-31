import { Component } from '@angular/core';
//importamos el servicio UI y Subscription (este ultimo permite escuchar los cambios en las variables de otros componentes)
import { UiService } from '../../servicios/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  titulo:string="Lista de Tareas";

  //variables alternarAddTask y Subscription
  mostrarAddTask: boolean = false;
  subscription?: Subscription;
  
  //definimos el servicio en el constructor
  constructor (private uiService:UiService){
    //suscripcion al metodo onToggle del servicio ui, le pasamos el valor de la variable al servicio.
    this.subscription = this.uiService.onToggle().subscribe(value => this.mostrarAddTask = value )
  }
  
  //metodo que alterna si se muestra el componente add-task (este es activado por un evento del componente boton y luego llama a un metodo del servicio)
  alternarFormulario(){
    this.uiService.alternarAddTask();
  }

}
