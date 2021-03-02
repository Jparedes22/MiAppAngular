import { Injectable } from '@angular/core';
import { Ciclo } from '../utils/Ciclo';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  ciclos: Ciclo[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ]

  ciclosFiltrados:Ciclo[]=[

  ]

getAllCiclos():Ciclo[]{
  return this.ciclos;

}
getCiclosFiltrados(curso: number, nombre: string): Ciclo[] {
  this.ciclosFiltrados.splice(0, this.ciclosFiltrados.length)
    
  this.ciclos.forEach((element) => {

    if (element.nombre.includes(nombre) && element.curso == curso) {
      this.ciclos.forEach(element => {
        this.ciclosFiltrados.push(element)

      });
    }
  })
  
  return this.ciclosFiltrados;
}
  constructor() {
  
   }

  
}
