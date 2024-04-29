import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverViewContainerComponent } from './over-view-container/over-view-container.component';
import { OverViewCardComponent } from './over-view-card/over-view-card.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { OverViewTodayCardComponent } from './over-view-today-card/over-view-today-card.component';
import { OverViewTodayContainerComponent } from './over-view-today-container/over-view-today-container.component';




@NgModule({
  declarations: [HeaderComponent, OverViewContainerComponent, OverViewCardComponent,NumberFormatPipe, OverViewTodayCardComponent, OverViewTodayContainerComponent],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent,
    OverViewContainerComponent,
    OverViewTodayContainerComponent,
    NumberFormatPipe
  ]
})
export class ComponentsModule { }
