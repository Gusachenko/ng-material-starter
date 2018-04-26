import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product1',
  templateUrl: './page-product1.component.html',
  styleUrls: ['./page-product1.component.scss']
})
export class PageProduct1Component implements OnInit {
  loremItems = new Array(30);
  constructor() { }

  ngOnInit() {
  }

}
