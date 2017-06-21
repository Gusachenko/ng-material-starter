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
  @ViewChild('maincontent') m_mainContent;

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2){
    renderer.listen(window, 'resize', (event) => {
      this.checkWindowWidth();
    });
  }

  ngAfterViewInit() {
    this.checkWindowWidth();

    this.renderer.listen(this.m_mainContent.nativeElement, 'scroll', (event) => {
        this.globalStateServiceService.changeMainContentScrollState(event.target.scrollTop);
    });
  }

  private checkWindowWidth() : void {
    if(window.innerWidth > 768){
      this.globalStateServiceService.changeMobileVersionState(false);
      
    }else{
      this.globalStateServiceService.changeMobileVersionState(true);
    }
  }

  title = 'app works!';
}
