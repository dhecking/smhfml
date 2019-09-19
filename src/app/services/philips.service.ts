import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

declare var PubNub: any;

@Injectable({
  providedIn: "root"
})
export class PhilipsService {
  philips: any;

  constructor() {
    this.philips = new PhilipsService();
    return this;
  }

}
