import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PhilipsService {
  philips: any;

  constructor() {
    this.philips = new PhilipsService();
    return this;
  }

  login() {}

  getLights() {}
}
