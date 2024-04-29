import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  statex:boolean=false;
  ngOnInit(): void {

  }
  handleClick(){
    this.statex= !this.statex;
    this.statex?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark');
  }
}
