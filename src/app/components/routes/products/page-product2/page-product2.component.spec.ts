import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduct2Component } from './page-product2.component';

describe('PageProduct2Component', () => {
  let component: PageProduct2Component;
  let fixture: ComponentFixture<PageProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
