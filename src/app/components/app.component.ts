import {Component, OnInit} from "@angular/core";
import {SwUpdate} from "@angular/service-worker";
import * as firebase from "firebase/app";
import {environment} from "../../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'Team Angular';
  updateAvailable = false;

  constructor(private update: SwUpdate) {
      console.log("AppComponent::constructor", update);
      update.available.subscribe((event) => {
        console.log('Updating to latest version.');
        this.updateAvailable = true;
        update.activateUpdate().then(() => document.location.reload());
      });
    }

    ngOnInit(): void {
      const config = {
        apiKey: environment.firebaseApiKey,
        authDomain: environment.firebaseAuthDomain,
        databaseURL: environment.firebaseDatabaseURL,
        projectId: environment.firebaseProjectId,
        storageBucket: environment.firebaseStorageBucket
      };
      firebase.initializeApp(config);
    }
}
