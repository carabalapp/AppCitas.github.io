import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas : any[] = []

  agregarCita(cita:any){
    this.listCitas.push(cita)
  }
  // Para borrar con este metodo, se le debe pasar como primer parametro la posicion donde empieza a borrar y segundo parametro es cuantos va a borrar.
  
  delete(cita: any){
    this.listCitas.splice(cita,1);
  }
}
