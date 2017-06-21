import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveNavigationPanelComponent } from './adaptive-navigation-panel.component';

describe('AdaptiveNavigationPanelComponent', () => {
  let component: AdaptiveNavigationPanelComponent;
  let fixture: ComponentFixture<AdaptiveNavigationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveNavigationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
