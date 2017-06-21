import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildControlsPanelComponent } from './child-controls-panel.component';

describe('ChildControlsPanelComponent', () => {
  let component: ChildControlsPanelComponent;
  let fixture: ComponentFixture<ChildControlsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildControlsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildControlsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
