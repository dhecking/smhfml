import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

/**
 *  https://developers.meethue.com/develop/hue-api/
 */
@Injectable({
  providedIn: "root"
})
export class HueService {
  baseUri: string;

  constructor(private httpClient: HttpClient) {
    console.log("Begin HueService::constructor");
    // this.getBaseUri();
    this.baseUri = "//" + environment.philipsBridge + "/api/" + environment.philipsApiKey;
    console.log("Finish HueService::constructor");
  }

  /**
   * https://discovery.meethue.com
   * https://www.meethue.com/api/nupnp
   */
  // async getBaseUri() {
  //   const data = await this.httpClient.get("https://discovery.meethue.com").toPromise();
  //   this.baseUri = "//" + data[0].internalipaddress + "/api/" + environment.philipsApiKey;
  //   console.log(this.baseUri);
  // }

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
