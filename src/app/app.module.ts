import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TaskItemComponent } from './componentes/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//importamos el modulo de http (IMPORTANTE!!! http en minusculas)
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './componentes/add-task/add-task.component';
//importamos el modulo de formularios
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
