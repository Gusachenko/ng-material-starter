import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduct1Component } from './page-product1.component';

describe('PageProduct1Component', () => {
  let component: PageProduct1Component;
  let fixture: ComponentFixture<PageProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
