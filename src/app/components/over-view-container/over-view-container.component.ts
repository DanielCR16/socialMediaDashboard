import { Component, OnInit } from '@angular/core';
import {dataCards} from "../../../shared/data";

@Component({
  selector: 'app-over-view-container',
  templateUrl: './over-view-container.component.html',
  styleUrls: ['./over-view-container.component.css']
})
export class OverViewContainerComponent implements OnInit {
  cards=dataCards.overview;
  constructor() { }

  ngOnInit(): void {
    console.log(dataCards);
  }

}
