import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

export interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // google maps zoom level
  zoom: number = 18;

  // initial center position for the map
  lat: number = 33.76057524016749;
  lng: number = -84.36079368475487;

   markers: Marker[] = [{
      lat: 33.76057524016749,
      lng: -84.36079368475487,
      label: 'Dirck',
      draggable: false
    }
  ];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
    console.log('mapClicked: ', $event.coords.lat + ' ' + $event.coords.lng);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
