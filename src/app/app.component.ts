import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { SwUpdate } from "@angular/service-worker";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  updateAvailable = false;

  constructor(private titleService: Title, private update: SwUpdate) {
    console.log("AppComponent::constructor");
    update.available.subscribe((event) => {
      this.updateAvailable = true;
      update.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.setTitle(environment.app + " " + environment.version);
  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
