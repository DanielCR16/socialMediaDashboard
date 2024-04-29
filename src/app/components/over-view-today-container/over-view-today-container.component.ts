import { Component, OnInit } from '@angular/core';
import { dataCards } from 'src/shared/data';

@Component({
  selector: 'app-over-view-today-container',
  templateUrl: './over-view-today-container.component.html',
  styleUrls: ['./over-view-today-container.component.css']
})
export class OverViewTodayContainerComponent implements OnInit {
  cards=dataCards['overview-today'];
  constructor() { }

  ngOnInit(): void {
  }

}
