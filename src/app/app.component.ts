import { Component } from '@angular/core';
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
export class AppComponent {
  constructor() {
    firebase.initializeApp(config);
  }
}
