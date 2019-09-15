import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as firebase from 'firebase/app';
// import 'firebase/<PACKAGE>'

const config = {
  apiKey: 'AIzaSyBhWs5avydlNtKhxMbt6KdAGWxFLdAk7Bw',
  authDomain: 'alien-outrider-213710.firebaseapp.com',
  databaseURL: 'https://alien-outrider-213710.firebaseio.com/',
  projectId: 'alien-outrider-213710',
  storageBucket: 'gs://alien-outrider-213710.appspot.com',
};

@Component({
  selector: 'app-index',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  swUpdate: any;
  newVersion: true;

  constructor(swUpdate: SwUpdate) {
    console.log("AppComponent::constructor()", swUpdate);
    this.swUpdate = swUpdate;
  }

  ngOnInit(): void {
    console.log("AppComponent::ngOnInit");
    this.swUpdate.available.subscribe(update => this.newVersion = true);
    firebase.initializeApp(config);
  }

  ngOnDestroy(): void {
    console.log("AppComponent::ngOnDestroy");
  }

  reload() {
    console.log("AppComponent::reload");
    this.swUpdate.activated.subscribe(
      update => {
        // console.log(update);
        window.location.reload();
      },
      this.swUpdate.activateUpdate());
  }

}
