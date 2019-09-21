import { Component, OnInit } from '@angular/core';
import { HueService } from "../../services/hue.service";

@Component({
  selector: 'app-hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.css']
})
export class HueComponent implements OnInit {

  constructor(private hueService: HueService) {
    console.log("HueComponent::constructor");
  }

  ngOnInit() {
    console.log("HueComponent::ngOnInit");
    this.hueService.getLights().subscribe(data => {
      console.log("getLights", data);
    });
  }

}
