import { Component, ViewChild, ElementRef } from "@angular/core";

declare var google: any;
let map: any;
let marker: any;
let infowindow: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const iconBase = "https://maps.google.com/mapfiles/ms/icons/";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent {
  @ViewChild("googlemaps", { static: false }) mapElement: ElementRef;

  lat: number = 33.76057524016749;
  lng: number = -84.36079368475487;

  constructor() {
    console.log("MapComponent::constructor");
    this.initMap();
  }

  initMap() {
    console.log("MapComponent::initMap()");

    navigator.geolocation.getCurrentPosition(
      location => {
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          },
          disableDefaultUI: true,
          zoom: 18,
          styles: this.getCustomStyle()
        });

        infowindow = new google.maps.InfoWindow();

        marker = new google.maps.Marker({
          position: { lat: location.coords.latitude, lng: location.coords.longitude },
          map,
          title: 'Click to zoom',
          icon: iconBase + 'blue-dot.png',
          animation: google.maps.Animation.DROP
        });

        // Recentering logic, tie this to the proper icon overlay
        map.addListener('center_changed', () => {
          console.log("map.center_changed: ");
          window.setTimeout(() => {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        map.addListener("click", (event: any) => {
          console.log("map.click: " + event.latLng);
          infowindow.setPosition(event.latLng);
          infowindow.setContent(event.latLng + "");
          infowindow.open(map);
        });

        marker.addListener('click', (event: any) => {
          console.log("marker.click: " + event.latLng);
          infowindow.setPosition(event.latLng);
          infowindow.setContent('<h2>Yes, I wanna be a donor!</h2>' +
          '<h3><a href="/add-donor/' + marker.getPosition().lat() + '/' + marker.getPosition().lng()  + '">Register Here</a></h3>');
          infowindow.open(map, marker);
        });

      },
      error => {
        console.log(error);
      },
      options
    );

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
