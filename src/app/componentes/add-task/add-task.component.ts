//importamos Output y EventEmitter
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
//importamos la interfaz
import { Task } from '../../task';
//importamos el servicio UI y Subscription (este ultimo permite escuchar los cambios en las variables de otros componentes)
import { UiService } from '../../servicios/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  //output que emite la tarea creada hacia afuera
  //impottante!!! en este event el tipo es any comprobar si aun asi sirve o no...
  @Output() onAddTask: EventEmitter<any> = new EventEmitter();

  //variables para los inputs del template
  texto: string ="";
  dia: string ="";
  reminder: boolean = false;
  //variable para mostrar el formulario y la de subscription
  mostrarAddTask: boolean = false;
  subscription?: Subscription;

  //metemos el servicio UI en el constructor
  constructor(private uiService: UiService){
    //suscripcion al metodo onToggle del servicio ui, le pasamos el valor de la variable al servicio.
    this.subscription = this.uiService.onToggle().subscribe(value => this.mostrarAddTask = value )
  }

  //funcion que envia el formulario y crea una nueva tarea
  onSubmit(){
    //"validacion" para que la tarea enviada tenga si o si texto 
    if(this.texto.length === 0){
      alert("por favor escriba una tarea!")
    }
    //creamos una tarea 
    const {texto,dia,reminder} = this
    const newTask = {texto,dia,reminder} 

    //emitimos la funcion crear tarea hacia fuera
    this.onAddTask.emit(newTask);
  }

  ngOnInit(): void {
  }

}
