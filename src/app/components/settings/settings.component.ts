import { Component, OnInit } from '@angular/core';
import { PubnubService } from '../../services/pubnub.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  constructor(private pubnubService: PubnubService) {
    console.log("SettingsComponent::constructor");
  }

  ngOnInit() {
      this.pubnubService.publishMessage("SettingsComponent:: ngOnInit()");
  }

}
