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

  idMarker: any;

  ngOnInit(): void {
    this.setCoordinates();
    this.autoPreview();
  }

  setCoordinates(){
    this.coordinatesList = [
      {
        "id": "0",
        "lat": "-7.397694",
        "lng": "-35.111162"
      },
      {
        "id": "1",
        "lat": "-7.397574",
        "lng": "-35.110322"
      },
      {
        "id": "2",
        "lat": "-7.398192",
        "lng": "-35.110274"
      },
    ];
  }

  showPhoto(id: any){
    this.idMarker = id;
    // window.setTimeout(() => { this.idMarker = null }, 5000);
  }

  setShowPhoto(){
    this.idMarker = null;
  }

  autoPreview(){
    /*window.setInterval(() => {
      let randomId: number = Math.floor((Math.random() * 3) + 0);
      this.idMarker = randomId;
     }, 2000);*/
  }

}
