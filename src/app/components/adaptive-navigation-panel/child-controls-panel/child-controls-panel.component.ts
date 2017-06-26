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

  private mainContentScrollValue: number;
  private subscription: Subscription;

  public sideNavOpen(){
    this.globalStateServiceService.changeSideNavState(true);
  }

  constructor(private globalStateServiceService: GlobalStateServiceService) {
    globalStateServiceService.mainContentScrollState.subscribe( scrollValue => {
          this.mainContentScrollValue = scrollValue;
    });
    globalStateServiceService.mobileVersionState.subscribe( state => {
        this.mobileVersion = state;
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
            'transform':  'rotateY('+this.mainContentScrollValue * 0.1+'deg)'
        };
        return styles;
    }
}
