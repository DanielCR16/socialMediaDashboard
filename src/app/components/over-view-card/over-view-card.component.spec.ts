import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewCardComponent } from './over-view-card.component';

describe('OverViewCardComponent', () => {
  let component: OverViewCardComponent;
  let fixture: ComponentFixture<OverViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
