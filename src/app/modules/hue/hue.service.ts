import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../environments/environment";

/**
 *  https://developers.meethue.com/develop/hue-api/
 */
@Injectable({
  providedIn: "root"
})
export class HueService {
  baseUri: string;

  constructor(private httpClient: HttpClient) {
    console.log("HueService::constructor");
    this.baseUri = "//" + environment.philipsBridge + "/api/" + environment.philipsApiKey;
  }

  login() {
    return this.httpClient.get(this.baseUri);
  }

  getLights() {
    return this.httpClient.get(this.baseUri + "/lights");
  }

  getLight(id: number) {
    return this.httpClient.get(this.baseUri + "/lights/" + id);
  }

  setLightName(id: number, name: string) {
    const body: string = '{"name":"' + name + '"}';
    return this.httpClient.put(this.baseUri + "/lights/" + id, body);
  }

  updateState(id: number, name: string, value: number) {
    const body: string = '{"' + name + '": ' + value + '}';
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  setBrightness(id: number, val: number) {
    const body: string = '{"bri": ' + val + '}';
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  setLightEffect(id: number, name: string) {
    const body: string = '{"effect": "' + name + '"}';
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  turnLightOn(id: number, on: boolean) {
    const body: string = '{"on":' + on + "}";
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  getNewLights() {
    return this.httpClient.get(this.baseUri + "/lights/new");
  }
}
