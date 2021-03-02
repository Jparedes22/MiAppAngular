import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiclosService } from 'src/app/services/ciclos.service';
import { DatosService } from 'src/app/services/datos.service';
import { Asignatura } from 'src/app/utils/Asignatura';
import { Ciclo } from 'src/app/utils/Ciclo';
import { conocimientos } from 'src/app/utils/conocimientos';




@Component({
  selector: 'app-detalles-ciclos',
  templateUrl: './detalles-ciclos.component.html',
  styleUrls: ['./detalles-ciclos.component.css']
})
export class DetallesCiclosComponent implements OnInit {
  curso: number = 0;
  nombre: string = "";
  asignaturas: Asignatura[] = [];
  conocimientos: conocimientos[] = [];
  ciclos:Ciclo[]=[];


  constructor(private ruta: ActivatedRoute, private servicioDatos: DatosService, private servicioCiclos: CiclosService) {
    this.curso = this.ruta.snapshot.params['curso'];
    this.nombre = this.ruta.snapshot.params['nombre'];
    this.asignaturas = servicioDatos.getAsignaturasDetalle(this.curso, this.nombre);
    this.conocimientos = servicioDatos.getConocimientos(this.curso, this.nombre);
    this.ciclos=servicioCiclos.getCiclosFiltrados(this.curso,this.nombre);
    
  }

  ngOnInit(): void {
  }

}
