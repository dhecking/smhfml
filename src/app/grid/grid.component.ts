import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  tiles: Tile[] = [
    {text: '', cols: 3, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 2, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 2, rows: 1, color: 'lightblue'},
  ];
}

