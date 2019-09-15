import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  reason = '';

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
