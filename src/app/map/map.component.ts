import { Component, ViewChild, ElementRef } from "@angular/core";

declare var google: any;

const iconBase = "https://maps.google.com/mapfiles/ms/icons/";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent {
  map: google.maps.Map;
  marker: google.maps.Marker;
  location: google.maps.LatLng;
  options: PositionOptions = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};

  @ViewChild("googlemaps", { static: true }) mapElement: ElementRef;

  constructor() {
    console.log("MapComponent::constructor");
    this.initMap();
  }

  initMap() {
    console.log("MapComponent::initMap");

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(`starting postion:  ${position.coords.latitude} - ${position.coords.longitude}`);

        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          center: {
            lat: 33.76057524016749,
            lng: -84.36079368475487
          },
          disableDefaultUI: true,
          styles: this.getCustomStyle(),
          zoom: 18
        });

        this.showPosition(position);
      },
      (error) => {
        console.log(error);
      },
      this.options);

      navigator.geolocation.watchPosition((position) => {
        console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
        this.showPosition(position);
      });

    } else {
      console.log("Geolocation is not supported by this browser.");
    }

  }

  showPosition(position: Position) {

    this.location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(this.location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: this.location,
        map: this.map,
        title: '@dhecking'
      });
    } else {
      this.marker.setPosition(this.location);
    }
  }

  getMutedBlue() {
    return [
      {
        featureType: "all",
        stylers: [
          {
            saturation: 0
          },
          {
            hue: "#e7ecf0"
          }
        ]
      },
      {
        featureType: "road",
        stylers: [
          {
            saturation: -70
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            saturation: -60
          }
        ]
      }
    ];
  }

  getCustomStyle() {
    return [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8ec3b9"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70"
          }
        ]
      }
    ];
  }
}
