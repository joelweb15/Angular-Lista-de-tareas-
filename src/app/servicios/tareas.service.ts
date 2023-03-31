import { Injectable } from '@angular/core';
//importamos http (IMPORTANTE!!! http en minusculas)
import { HttpClient, HttpHeaders } from '@angular/common/http';
//esta importacion permite definir metodos observables (eventos no sincronizados) 
import { Observable, of } from 'rxjs';
// importamos tambien la interfaz de task (tarea en español)
import { Task } from '../task';

//define que los headers que mandamos en peticiones son una instancia de header y son de tipo conten type con una aplicacion de tipo json
//resumen: le manda un json al servidor
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  //api con el url del servidor "base de dato json"
  private apiUrl = 'http://localhost:5001/tasks'
  
  //inicializamos el metodo http agregando entre parentesis "private http:HttpClient"
  constructor(private http:HttpClient) { }
  
  //metodo observable, se le agrega observable<tipo_de_dato>
  //tambien antes del return una variable const 
  getTasks(): Observable<Task[]> {
    //retorna la url del servidor "base de datos"
    return this.http.get<Task[]>(this.apiUrl);
  }

  //evento borrar tarea
  deleteTask(task: Task): Observable<Task>{
    //IMPORTANTE!!! en esta constante la combinacion de esta siendo rodeada por ` ` (NO son comillas simples, ojo)
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }

  //metodo para cambiar el dato reminder en la base de datos
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    //recibe por parametro la url, la tarea, y la constante HttpHeaders (esta ultima como instruccion para que pueda manejarlo, porque informa al back que le mandamos un Json en la peticion put)
    return this.http.put<Task>(url, task, httpOptions);
  }

  //recibe una tarea desde tareas y la CREA (la guarda en la base de datos)

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
