import { Component, OnInit, ViewChild } from '@angular/core';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-adaptive-navigation-panel',
  templateUrl: './adaptive-navigation-panel.component.html',
  styleUrls: ['./adaptive-navigation-panel.component.scss']
})
export class AdaptiveNavigationPanelComponent implements OnInit {
  @ViewChild('sidenav') m_sidenav;

  public mobileVersion : boolean = false;

  constructor(private globalStateServiceService: GlobalStateServiceService) {
    globalStateServiceService.sideNavState.subscribe( state => {
      this.m_sidenav.open();
    });
    globalStateServiceService.mobileVersionState.subscribe( state => {
        this.mobileVersion = state;
    });
  }

  ngOnInit() {
  }

}
