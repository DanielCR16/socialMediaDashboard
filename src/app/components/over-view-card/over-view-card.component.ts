import { Component, Input, OnInit } from '@angular/core';
import { NumberFormatPipe } from 'src/app/components/pipes/number-format.pipe';
export interface Network {
  [key: string]: string;

}
@Component({
  selector: 'app-over-view-card',
  templateUrl: './over-view-card.component.html',
  styleUrls: ['./over-view-card.component.css']
})
export class OverViewCardComponent implements OnInit {
  @Input('cardHijo') cardHijo:any;
  typeOfNetwork!:Network;
  colorNetwork!:Network;
  isUpOrDown!:string;
  iconStateFollowers!:string;

  constructor() { }

  ngOnInit(): void {
    this.isUpOrDown=this.cardHijo.isUp?'icon-up':'icon-down';
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
