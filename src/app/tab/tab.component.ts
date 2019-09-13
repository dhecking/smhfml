import {Component} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.css'],
})
export class TabComponent {
  links = ['Izzy', 'Maps', 'Grid'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
