//le agregamos Input, Output y EventEmitter
import { Component, Input, Output, EventEmitter } from '@angular/core';

//Importamos la interfaz y el arreglo
import { Task } from 'src/app/task';
import { TAREAS } from 'src/app/mock-tasks'; 

//importamos un icono de angular
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  //Input de entrada que recibe una tarea de tipo Task igual al primer elemento del array TAREAS
  @Input() task: Task = TAREAS[0]

  //Output que emite el evento borrar 
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  
  //Output que emite el evento toggle (alternar)
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  //Llamamos al icono de angular
  faTimes = faTimes;
  
  //metodo borrar que emite la tarea al padre (gracias al Output de arriba)
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  //metodo toggle (alternar), cambia el dato reminder (tiene definido un output arriba)
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
