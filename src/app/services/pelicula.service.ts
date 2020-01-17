import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://i.blogs.es/e62365/cartel-spiderman-homecoming/450_1000.jpg"),
            new Pelicula("Los vengadores", 2020, "https://static3.diariosur.es/www/multimedia/201907/22/media/cortadas/140180521--624x663.jpg"),
            new Pelicula("Batman V Superman", 2021, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIolR7WcjIvdOC-E5BDuVWAI4b8pGFDk-HumYs77-XP6xIFOVh")
          ];
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}