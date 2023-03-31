import { Injectable } from '@angular/core';
// Le importamos Observable y Subject
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  //variable para mostrar el formulario
  private mostrarAddTask: boolean = false;

  //definimos una variable para la importacion Subject (esta permite escuchar eventos del template)
  private subject = new Subject<any>();

  constructor() { }

  //funcion para alternar si aparece o no el formulario.
  alternarAddTask():void{
    this.mostrarAddTask = !this.mostrarAddTask;
    this.subject.next(this.mostrarAddTask);
  }

  //funcion que retorna la variable subject
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
