import {Component, OnInit} from "@angular/core";
import { Title } from '@angular/platform-browser';
import {SwUpdate} from "@angular/service-worker";
import * as firebase from "firebase/app";
import {environment} from "../../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  updateAvailable = false;

  constructor(private titleService: Title, private update: SwUpdate) {
    update.available.subscribe((event) => {
      this.updateAvailable = true;
      update.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.setTitle(environment.app + " " + environment.version);
    const config = {
      apiKey: environment.firebaseApiKey,
      authDomain: environment.firebaseAuthDomain,
      databaseURL: environment.firebaseDatabaseURL,
      projectId: environment.firebaseProjectId,
      storageBucket: environment.firebaseStorageBucket
    };
    firebase.initializeApp(config);
  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
