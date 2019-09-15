import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: any;
  marker: any;
  location: any;
  speed: number;
  heading: number;
  altitude: number;
  watchPositionId: number;
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  @ViewChild("googlemaps", { static: false }) mapElement: ElementRef;

  constructor() {

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
    console.log("MapComponent::ngOnDestroy(" + this.watchPositionId + ")");
    navigator.geolocation.clearWatch(this.watchPositionId);
  }

  initMap() {
    console.log("MapComponent::initMap");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18,
            center: this.location,
            disableDefaultUI: true,
            rotateControl: true,
            gestureHandling: "none",
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: this.getCustomStyle()
          });
          this.map.panTo(this.location);

          this.marker = new google.maps.Marker({
            position: this.location,
            title: "@dhecking",
            icon: "assets/icons/navigation-50.png",
            map: this.map
          });

        },
        error => {
          console.error("MapComponent: " + error.message);
        },
        this.options
      );

      this.watchPositionId = navigator.geolocation.watchPosition(
        position => {
          this.location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          this.map.panTo(this.location);
          this.marker.setPosition(this.location);
          this.updateDashboard(position);
        },
        error => {
          console.error("MapComponent: " + error.message);
        },
        this.options
      );
    }
  }

  updateDashboard(position: any){
    this.speed = parseInt(Math.round(position.coords.speed).toFixed(0), 10);
    this.heading = parseInt(Math.round(position.coords.heading).toFixed(0), 10);
    this.altitude = parseInt(Math.round(position.coords.altitude).toFixed(0), 10);
    document.getElementById("speed").innerText = this.speed + "";
    document.getElementById("heading").innerText = this.heading + "";
    document.getElementById("altitude").innerText = this.altitude + "";
  }

  hideAttributions() {
    console.log("MapComponent::hideAttributions");
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    sleep(1500).then(() => {
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


  getCustomStyle(): any {
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
