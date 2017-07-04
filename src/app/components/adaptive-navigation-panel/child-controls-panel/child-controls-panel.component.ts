import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-child-controls-panel',
  templateUrl: './child-controls-panel.component.html',
  styleUrls: ['./child-controls-panel.component.scss']
})
export class ChildControlsPanelComponent implements OnInit {
    @HostBinding('style.width.px') hostStyleWidthPx : number;

  public mobileVersion : boolean = false;

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
        this.hostStyleWidthPx = elementWidthValue;
    });
    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  public setLogoKiwiStyles() : any {
        let styles = {
            'transform':  'rotateY('+this.mainWrapperScrollValue * 0.1+'deg)'
        };
        return styles;
    }
}
