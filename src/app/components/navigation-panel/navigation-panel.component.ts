import { Component, AfterViewInit, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GlobalStateServiceService, NavigationItem } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements AfterViewInit, OnDestroy {

  public mobileVersion = false;

  private navigationItems: NavigationItem[];
  private mainWrapperScrollValue: number;
  private subscription: Subscription;

  constructor(private globalStateServiceService: GlobalStateServiceService) {

    this.navigationItems = globalStateServiceService.navigationItems;
    
    globalStateServiceService.mainWrapperScrollState.subscribe(scrollValue => {
      this.mainWrapperScrollValue = scrollValue;
    });
  }

  ngAfterViewInit() {
    this.globalStateServiceService.mobileVersionState.subscribe(state => {
      this.mobileVersion = state;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  public sideNav_open() {
    this.globalStateServiceService.changeSideNavState(true);
  }

  public setLogoKiwiStyles(): any {
    const styles = {
      'transform': 'rotateY(' + this.mainWrapperScrollValue * 0.1 + 'deg)'
    };
    return styles;
  }

  public avtiveNavItem(itemIndex: number[]): void {
    this.globalStateServiceService.navigationItemActive = itemIndex;
  }

}
