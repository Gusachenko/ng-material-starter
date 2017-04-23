import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  private mainContentScrollValue: number;
  
  private subscription: Subscription;

  public sideNavOpen(){
    this.globalStateServiceService.changeSideNavState(true);
  }

  constructor(private globalStateServiceService: GlobalStateServiceService) { 
    globalStateServiceService.mainContentScrollState.subscribe( scrollValue => {
          this.mainContentScrollValue = scrollValue;
      });
    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  private setLogoKiwiStyles() : any {
        let styles = {
            'transform':  'rotateY('+this.mainContentScrollValue+'deg)'
        };
        return styles;
    }

}
