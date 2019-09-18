import {Injectable, OnDestroy} from "@angular/core";

import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

export class Style {
  constructor(public id: number, public name: string) {}
}

const FETCH_LATENCY = 500;

const STYLES: Style[] = [new Style(1, "BlueMoon"), new Style(2, "Smitten"), new Style(3, "Peachy"), new Style(4, "Falling")];

@Injectable()
export class MapService implements OnDestroy {

  constructor() {
    console.log("MapService instance created.");
  }
  
  ngOnDestroy() {
    console.log("MapService instance destroyed.");
  }

  getItems(): Observable<Style[]> {
    return of(STYLES).pipe(delay(FETCH_LATENCY));
  }

  getItem(id: number | string): Observable<Style> {
    const item$ = of(STYLES.find(item => item.id === +id));
    return item$.pipe(delay(FETCH_LATENCY));
  }
}
