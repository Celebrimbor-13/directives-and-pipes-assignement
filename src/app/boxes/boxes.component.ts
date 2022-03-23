import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
})
export class BoxesComponent implements OnInit {
  divs: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 49; i++) {
      this.divs.push(i);
    }
  }
}
