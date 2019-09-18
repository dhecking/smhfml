import {ApplicationRef, Injectable} from "@angular/core";
import {SwUpdate} from "@angular/service-worker";
import {concat, interval} from "rxjs";
import {first} from "rxjs/operators";

@Injectable()
export class AppUpdateService {

  constructor(appRef: ApplicationRef, update: SwUpdate) {
    console.log("AppUpdateService::constructor()", update);

    const appIsStable = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable = concat(appIsStable, everySixHours);
    everySixHoursOnceAppIsStable.subscribe(() => update.checkForUpdate());

  }
}
