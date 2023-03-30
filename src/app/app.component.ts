import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interpolacionydirectivas';

  personas : string[] = [
    'Martinez',
    'Romero',
    'Otamendi',
    'Martinez' ]

  ngOnInit(){
    console.log('El componente inicio');
  }
}
