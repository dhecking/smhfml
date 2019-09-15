import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SwPush } from "@angular/service-worker";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class WebNotificationService {

  constructor(private http: HttpClient, private swPush: SwPush) {
    console.log("WebNotificationService::constructor");
  }

  subscribeToNotification() {
    console.log("WebNotificationService::subscribeToNotification");
    this.swPush
      .requestSubscription({
        serverPublicKey: environment.publicVapidKey
      })
      .then(sub => this.sendToServer(sub))
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

  sendToServer(params: any) {
    this.http.post(environment.baseNotificationUrl, { notification: params }).subscribe();
  }
}
