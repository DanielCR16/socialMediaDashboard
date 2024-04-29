import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewTodayCardComponent } from './over-view-today-card.component';

describe('OverViewTodayCardComponent', () => {
  let component: OverViewTodayCardComponent;
  let fixture: ComponentFixture<OverViewTodayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewTodayCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewTodayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
