import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

declare var PubNub: any;

@Injectable({
  providedIn: "root"
})
export class PubnubService {
  pubnub: any;

  constructor() {
    this.pubnub = new PubNub({
      subscribeKey: environment.pubnubSubscribeKey,
      publishKey: environment.pubnubPublishKey,
      logVerbosity: true,
      ssl: true,
      presenceTimeout: 130,
      UUID: PubNub.generateUUID()
    });
    return this;
  }

  publishMessage(message: string) {
    const newMessage = {
      text: message
    };
    this.pubnub
      .publish({
        message: newMessage,
        channel: "angular-maps"
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
