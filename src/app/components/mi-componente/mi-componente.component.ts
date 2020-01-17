import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo, Soy Mi Componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2019;
        this.mostrarPeliculas = true;
        console.log("Componente mi-componente cargado!!");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }

}