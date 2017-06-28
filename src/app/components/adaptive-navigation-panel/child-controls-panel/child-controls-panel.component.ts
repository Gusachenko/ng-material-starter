import { Component, OnInit, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-child-controls-panel',
  templateUrl: './child-controls-panel.component.html',
  styleUrls: ['./child-controls-panel.component.scss']
})
export class ChildControlsPanelComponent implements OnInit {

  public mobileVersion : boolean = false;
  public mainContentWidthValue : number;

  private mainWrapperScrollValue: number;
  private subscription: Subscription;

  public sideNavOpen(){
    this.globalStateServiceService.changeSideNavState(true);
  }

  constructor(private globalStateServiceService: GlobalStateServiceService) {
    globalStateServiceService.mainWrapperScrollState.subscribe( scrollValue => {
          this.mainWrapperScrollValue = scrollValue;
    });
    globalStateServiceService.mobileVersionState.subscribe( state => {
        this.mobileVersion = state;
    });
    globalStateServiceService.mainContentWidthState.subscribe( elementWidthValue => {
        this.mainContentWidthValue = elementWidthValue;
    });
    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  public getToobarStyles() : any {
        let styles = {
            'width':  `${this.mainContentWidthValue}px`
        };
        return styles;
  }
  public setLogoKiwiStyles() : any {
        let styles = {
            'transform':  'rotateY('+this.mainWrapperScrollValue * 0.1+'deg)'
        };
        return styles;
    }
}
