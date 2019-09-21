import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
declare var Trianglify: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log("HomeComponent::constructor");
  }

  ngOnInit(): void {
    console.log("HomeComponent::ngOnInit");

    // set up the base pattern
    // const pattern = Trianglify({
    //   cell_size: 30 + Math.random() * 100
    // });
    // pattern.canvas(document.getElementById("homenow"));

    // display.appendChild(pattern.svg());
    // const png = document.createElement("img");
    // png.src = pattern.png();
    // document.body.appendChild(png);
  }
}
