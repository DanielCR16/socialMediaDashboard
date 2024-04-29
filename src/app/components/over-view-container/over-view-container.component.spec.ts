import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewContainerComponent } from './over-view-container.component';

describe('OverViewContainerComponent', () => {
  let component: OverViewContainerComponent;
  let fixture: ComponentFixture<OverViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
