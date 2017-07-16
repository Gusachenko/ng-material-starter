import { Component, OnInit, HostBinding } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { GlobalStateServiceService, NavigationItem } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  public mobileVersion : boolean = false;
  public navigationItems : NavigationItem[];

  private mainWrapperScrollValue: number;
  private subscription: Subscription;

  constructor(private globalStateServiceService: GlobalStateServiceService) {

    this.navigationItems = globalStateServiceService.navigationItems;
     
    globalStateServiceService.mainWrapperScrollState.subscribe( scrollValue => {
          this.mainWrapperScrollValue = scrollValue;
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

  public sideNav_open(){
    this.globalStateServiceService.changeSideNavState(true);
  }

  public setLogoKiwiStyles() : any {
        let styles = {
            'transform':  'rotateY('+this.mainWrapperScrollValue * 0.1+'deg)'
        };
        return styles;
  }

  public avtiveNavItem(itemIndex: number) : void {
      this.globalStateServiceService.navigationItemActive = itemIndex;
  }

}