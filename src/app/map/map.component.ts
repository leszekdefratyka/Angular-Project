import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  latitude = 51.653520466112134;
  longitude = 17.798326527415043;

onChoseLocation(event){
  console.log(event);
}

}