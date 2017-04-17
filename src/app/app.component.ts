import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ GlobalStateServiceService ]
})
export class AppComponent {
  @ViewChild('sidenav') m_sidenav;

  constructor(private globalStateServiceService: GlobalStateServiceService){
      globalStateServiceService.sideNavState.subscribe( state => {
          this.m_sidenav.open();
      });
  }

  title = 'app works!';
}
