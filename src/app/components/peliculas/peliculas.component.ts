import { Component, OnInit, DoCheck } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {
  
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020,8,12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(){
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
