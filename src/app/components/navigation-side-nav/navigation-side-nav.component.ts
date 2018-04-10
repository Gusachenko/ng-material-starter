import { Component } from '@angular/core';

import { GlobalStateServiceService } from '../../services/global-state-service.service';
import { NavigationItem } from '../../classes/navigation-item';

@Component({
  selector: 'app-navigation-side-nav',
  templateUrl: './navigation-side-nav.component.html',
  styleUrls: ['./navigation-side-nav.component.scss'],
  host: {
    '[class.side-nav_visible]': '_visible',
    '[class.side-nav_open]': '_open'
  }
})
export class NavigationSideNavComponent {
  _visible = false;
  _open = false;

  public navigationItems: NavigationItem[];

  constructor(private globalStateServiceService: GlobalStateServiceService) {
    this.navigationItems = globalStateServiceService.navigationItems;

    globalStateServiceService.sideNavState.subscribe(state => {
      if (state === true) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  public open(): void {
    this._visible = true;
    this._open = true;
  }

  public close(): void {
    this._open = false;
  }

  get visible(): boolean {
    return this._visible;
  }
  set visible(state: boolean) {
    this._visible = state;
  }

  //TODO Fix routing on `Enter` event
  public avtiveNavItem(itemIndex: number[], event: any): void {
    this.globalStateServiceService.changeMaskModalState(false);
    this.globalStateServiceService.navigationItemActive = itemIndex;
  }

  public toggleNestedNavItem(event: any, nestedList: HTMLDivElement): void {
    const currentTarget = event.currentTarget;
    if (currentTarget.getAttribute('aria-expanded') === 'true') {
      currentTarget.classList.remove('expanded');
      currentTarget.setAttribute('aria-expanded', 'false');
      nestedList.classList.remove('expanded');
      nestedList.setAttribute('aria-expanded', 'false');
    } else {
      currentTarget.classList.add('expanded');
      currentTarget.setAttribute('aria-expanded', 'true');
      nestedList.classList.add('expanded');
      nestedList.setAttribute('aria-expanded', 'true');
    }
  }
}
