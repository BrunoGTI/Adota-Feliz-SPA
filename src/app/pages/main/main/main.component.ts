import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -7.397694;
  lng: number = -35.111162;
  lat2: number = -7.397574;
  lng2: number = -35.110322;
  lat3: number = -7.398192;
  lng3: number = -35.110274;
  zoom: number = 17;

  ngOnInit(): void {
  }

}
