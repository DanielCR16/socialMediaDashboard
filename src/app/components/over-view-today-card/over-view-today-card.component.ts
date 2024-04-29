import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../over-view-card/over-view-card.component';

@Component({
  selector: 'app-over-view-today-card',
  templateUrl: './over-view-today-card.component.html',
  styleUrls: ['./over-view-today-card.component.css']
})
export class OverViewTodayCardComponent implements OnInit {
  @Input('cardHijoToday')cardHijoToday:any;
  typeOfNetwork!:Network;
  colorNetwork!:Network;
  isUpOrDown!:string;
  iconStateFollowers!:string;

  constructor() { }

  ngOnInit(): void {
    this.isUpOrDown=this.cardHijoToday.isUp?'icon-up':'icon-down';
    this.iconStateFollowers=`../../../assets/images/${this.isUpOrDown}.svg`;

    this.typeOfNetwork = {
      Twitter:'icon-twitter',
      Facebook:'icon-facebook',
      Instagram:'icon-instagram',
      YouTube:'icon-youtube',
  }
    this.colorNetwork = {
      Twitter:'bg-Twitter',
      Facebook:'bg-Facebook',
      Instagram:'bg-Instagram-gradient',
      YouTube:'bg-YouTube',
    }
  }

}
