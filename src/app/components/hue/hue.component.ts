import { Component, OnInit } from '@angular/core';
import { HueService } from "../../services/hue.service";
import { Light } from "./light";

@Component({
  selector: 'app-hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.css']
})
export class HueComponent implements OnInit {
  lights: Array<Light>;

  constructor(private hueService: HueService) {
    console.log("HueComponent::constructor");
    this.lights = new Array<Light>();
  }

  ngOnInit() {
    console.log("HueComponent::ngOnInit");
    this.hueService.getLights().subscribe( data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.lights.push(new Light(key, data[key].name));
        }
      }
    });

  }

}
