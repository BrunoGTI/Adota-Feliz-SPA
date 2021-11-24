import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  coordinatesList!: any;

  cityCoordinateLat: number = -7.397694;
  cityCoordinateLng:number = -35.111162;
  zoom: number = 17;

  ngOnInit(): void {
    this.setCoordinates();
  }

  setCoordinates(){
    this.coordinatesList = [
      {
        "lat": "-7.397694",
        "lng": "-35.111162"
      },
      {
        "lat": "-7.397574",
        "lng": "-35.110322"
      },
      {
        "lat": "-7.398192",
        "lng": "-35.110274"
      },
    ];
  }

}
