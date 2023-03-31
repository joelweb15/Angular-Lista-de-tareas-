import { Component, OnInit } from '@angular/core';
// Importamos el servicio que maneja la logica de tareas
import { TareasService } from 'src/app/servicios/tareas.service';
// importamos tambien la interfaz de task (tarea en español)
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // definimos la variable tasks de tipo array de tareas (task[])
  tareas: Task[] = [];
  
  //inicializamos el servicio en el constructor (lo inyectamos)
  constructor(private tareasService: TareasService){
  }
  
  //cuuando se monta nuestro componente este llama al servicio y un metodo de este
  ngOnInit(): void {
    //la suscribimos con .suscribe(mucho_texto)
     this.tareasService.getTasks().subscribe(tareas => {
      this.tareas = tareas;
     });
  }
  
  //evento que llama a otro evento borrar del servicio
  //este evento al finalizar redefine la lista "tareas",la variable definida arriba, pero sin dicha tarea borrada, esto en su suscribe.
  deleteTask(task: Task){
    this.tareasService.deleteTask(task).subscribe(() => {
      this.tareas = this.tareas.filter((t) => t.id !== task.id)
     });
  }

  //evento que vuelve el valor del dato reminder false (o viceversa)
  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    //llama al metodo updateTaskReminder() del servicio para cambiar el dato en la base
    this.tareasService.updateTaskReminder(task).subscribe();
  }

  //add event que crea una tarea (la cual recibe desde el add-task y llama un metodo del servicio)
  addTask(task: Task){
    this.tareasService.addTask(task).subscribe((task)=>(
     this.tareas.push(task)
    ))
  } 


}
