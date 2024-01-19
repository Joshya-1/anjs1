import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {

  @Input ('movieInput') movie:string[]=[]
}
