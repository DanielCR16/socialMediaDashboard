import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewTodayContainerComponent } from './over-view-today-container.component';

describe('OverViewTodayContainerComponent', () => {
  let component: OverViewTodayContainerComponent;
  let fixture: ComponentFixture<OverViewTodayContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewTodayContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewTodayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
