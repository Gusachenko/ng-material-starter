import { Component } from '@angular/core';
import { AfterViewInit, ViewChild,  Renderer2  } from '@angular/core';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ GlobalStateServiceService ]
})
export class AppComponent {
  @ViewChild('sidenav') m_sidenav;
  @ViewChild('maincontent') m_mainContent; 

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2){
      globalStateServiceService.sideNavState.subscribe( state => {
          this.m_sidenav.open();
      });
      
  }

  ngAfterViewInit() {
    this.renderer.listen(this.m_mainContent.nativeElement, 'scroll', (event) => {
        this.globalStateServiceService.changeMainContentScrollState(event.target.scrollTop);
    });
  }

  title = 'app works!';
}
