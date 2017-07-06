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
  @ViewChild('mainwrapper') m_mainWrapper;
  @ViewChild('maincontent') m_mainContent;

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2){
    this.globalStateServiceService.childControlsPanelElementHeightState.subscribe( elementHeight => {
      this.m_mainContent.nativeElement.style.marginTop = `${elementHeight}px`;
    });
    this.globalStateServiceService.controlsPanelScrollState.subscribe( scrollValue => {
      scrollValue = -scrollValue;
      this.m_mainWrapper.nativeElement.scrollTop = this.m_mainWrapper.nativeElement.scrollTop + scrollValue;
    });
    renderer.listen(window, 'resize', (event) => {
      this.checkWindow();
    });
  }

  ngAfterViewInit() {
    this.checkWindow();
    this.renderer.listen(this.m_mainWrapper.nativeElement, 'scroll', (event) => {
        this.globalStateServiceService.changeMainWrapperScrollState(event.target.scrollTop);
    });
  }

  private checkWindow() : void {
    if(window.innerWidth > 768){
      this.globalStateServiceService.changeMobileVersionState(false);     
    }else{
      this.globalStateServiceService.changeMobileVersionState(true);
    }
    this.globalStateServiceService.changeMainContentWidthState(this.m_mainContent.nativeElement.offsetWidth)
  }

  title = 'app works!';
}