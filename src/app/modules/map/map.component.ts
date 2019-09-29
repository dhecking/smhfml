import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { BlueMoon } from './styles/bluemoon';

const MapOpts: google.maps.MapOptions = {
  disableDefaultUI: true,
  gestureHandling: "none",
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  zoom: 18,
  backgroundColor: "#1d2c4d",
  noClear: true,
  styles: [
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
  ]
};

const SymOpts: google.maps.Symbol = {
  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
  fillColor: "#bff",
  fillOpacity: 0.8,
  scale: 10,
  strokeColor: '#4cf',
  strokeWeight: 2
};

const GeoOpts: PositionOptions = {
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
  map: google.maps.Map;
  marker: google.maps.Marker;
  geoSpeed: number = 0;
  geoHeading: number = 0;
  geoAltitude: number = 0;
  geoLocation: google.maps.LatLng;
  deviceAbsolute: boolean = true;
  deviceBank: number = 0;
  devicePitch: number = 0;
  deviceDirection: number = 0;
  deviceHeading: number = 0;
  deviceHeadingAccuracy: number = 0;
  watchPositionId: number;

  @ViewChild("googlemaps", { static: false }) mapElement: ElementRef;

  ngOnInit(): void {
    console.log("MapComponent::ngOnInit");
    this.initMap();
  }

  ngAfterViewInit(): void {
    console.log("MapComponent::ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("MapComponent::ngOnDestroy(" + this.watchPositionId + ")");
    navigator.geolocation.clearWatch(this.watchPositionId);
  }

  initMap() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          this.geoLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),

          this.map = new google.maps.Map(this.mapElement.nativeElement, MapOpts);
          this.map.setCenter(this.geoLocation);

          this.marker = new google.maps.Marker();
          this.marker.setMap(this.map);
          this.marker.setPosition(this.geoLocation);
          this.marker.setIcon(SymOpts);

        },
        (error: PositionError) => {
          console.error(error.message);
        },
        GeoOpts
      );

      this.watchPositionId = navigator.geolocation.watchPosition(
        (position: Position) => {
          this.geoLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),

          this.map.panTo(this.geoLocation);
          this.marker.setPosition(this.geoLocation);
          this.updateDashboard(position);

        },
        (error: PositionError) => {
          console.error(error.message);
        },
        GeoOpts
      );

      window.addEventListener('deviceorientation',
        (event: DeviceOrientationEvent) => {
          this.displayDeviceOrientation(event);
        },
        true);

    }
  }

  updateDashboard(position: Position) {
    this.geoSpeed = parseInt(Math.round(position.coords.speed).toFixed(0), 10);
    this.geoHeading = parseInt(Math.round(position.coords.heading).toFixed(0), 10);
    this.geoAltitude = parseInt(Math.round(position.coords.altitude).toFixed(0), 10);
    // document.getElementById("geoSpeed").innerText = this.geoSpeed + "";
    // document.getElementById("geoHeading").innerText = this.geoHeading + "";
    // document.getElementById("geoAltitude").innerText = this.geoAltitude + "";
  }

  displayDeviceOrientation(event: DeviceOrientationEvent) {
    this.deviceAbsolute = event.absolute;
    this.deviceBank = parseInt(Math.round(event.alpha).toFixed(0), 10);
    this.devicePitch = parseInt(Math.round(event.beta).toFixed(0), 10);
    this.deviceDirection = parseInt(Math.round(event.gamma).toFixed(0), 10);
    // document.getElementById("deviceDirection").innerText = this.deviceDirection + "";
    // document.getElementById("deviceHeading").innerText = this.deviceHeading + "";
  }

}
