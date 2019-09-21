import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HueService {
  baseUri: string;

  constructor(private httpClient: HttpClient) {
    this.baseUri = "http://" + environment.philipsBridgeIp + "/api/" + environment.philipsApiKey;
  }

  getBridge() {
    return this.httpClient.get("https://discovery.meethue.com");
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

  turnLightOn(id: number) {
    const body: string = '{"on": true}';
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  turnLightOff(id: number) {
    const body: string = '{"on": false}';
    return this.httpClient.put(this.baseUri + "/lights/" + id + "/state", body);
  }

  getNewLights() {
    return this.httpClient.get(this.baseUri + "/lights/new");
  }

}
