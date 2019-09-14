import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

declare var google: any;
let map: any;
let marker: any;
let location: any;
let watchPositionId: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("googlemaps", { static: false }) mapElement: ElementRef;

  constructor() {
    console.log("MapComponent::constructor");
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  ngOnInit(): void {
    console.log("MapComponent::ngOnInit");
    this.initMap();
  }

  ngAfterViewInit(): void {
    console.log("MapComponent::ngAfterViewInit");
    this.hideAttributions();
  }

  ngOnDestroy(): void {
    console.log("MapComponent::ngOnDestroy(" + watchPositionId + ")");
    navigator.geolocation.clearWatch(watchPositionId);
  }

  initMap() {
    console.log("MapComponent::initMap");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18,
            center: location,
            disableDefaultUI: true,
            gestureHandling: "none",
            styles: this.getCustomStyle()
          });
          map.panTo(location);

          marker = new google.maps.Marker({
            position: location,
            title: "@dhecking",
            icon: "assets/icons/navigation-50.png",
            map
          });
          marker.setPosition(location);

        },
        error => {
          console.error("MapComponent: " + error.message);
        },
        options
      );

      watchPositionId = navigator.geolocation.watchPosition(
        position => {
          location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map.panTo(location);
          marker.setPosition(location);
        },
        error => {
          console.error("MapComponent: " + error.message);
        },
        options
      );
    }
  }

  hideAttributions() {
    console.log("MapComponent::hideAttributions");
    this.sleep(1500).then(() => {
      const items = document.querySelectorAll(".gmnoprint");
      // console.log("hideAttributionsRight: " + items.length);
      items.forEach(item => {
        const element = item as HTMLElement;
        element.style.display = "none";
      });
      const items2 = document.querySelectorAll("[rel=noopener]");
      // console.log("hideAttributionsLeft: " + items2.length);
      items2.forEach(item => {
        const element = item as HTMLElement;
        element.style.display = "none";
      });
    });
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
