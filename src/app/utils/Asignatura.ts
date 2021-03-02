import {conocimientos}from "./conocimientos";
export interface Asignatura{


    nombre:string,
    profesor: string,
    conocimientos: conocimientos[],
    ciclo: string,
    curso: number,

}