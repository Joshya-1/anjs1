import { Component } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrl: './formcomponent.component.css'
})
export class FormcomponentComponent {
  movie:string[]=[];
  movieName='';
  movieslist(){
    this.movie.push(this.movieName);
    this.movieName="";
    console.log(this.movie);
  }
}
