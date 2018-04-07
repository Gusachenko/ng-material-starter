import { Component, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

import { GlobalStateServiceService, NavigationItem } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalStateServiceService]
})
export class AppComponent implements AfterViewInit {
  public title = 'app works!';
  @ViewChild('sidenav') vc_sideNav;
  @ViewChild('maskmodal') vc_maskModal;

  public navigationItems: NavigationItem[];

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2) {
    this.navigationItems = globalStateServiceService.navigationItems;
    globalStateServiceService.sideNavState.subscribe(state => {
      this.sideNav_open();
    });
    renderer.listen(window, 'resize', event => {
      this.checkWindow();
    });
  }

  ngAfterViewInit() {
    this.checkWindow();
    this.renderer.listen(window, 'scroll', event => {
      this.globalStateServiceService.changeMainWrapperScrollState(event.currentTarget.scrollY);
    });
  }

  private sideNav_open(): void {
    document.body.classList.add('disable-scroll');
    this.vc_maskModal.nativeElement.classList.add('mask-modal_visible');
    this.vc_sideNav.nativeElement.classList.add('side-nav_visible');
    this.vc_sideNav.nativeElement.classList.add('side-nav_open');
  }

  public sideNav_close(): void {
    this.vc_sideNav.nativeElement.classList.remove('side-nav_open');
    setTimeout(() => {
      this.vc_sideNav.nativeElement.classList.remove('side-nav_visible');
      this.vc_maskModal.nativeElement.classList.remove('mask-modal_visible');
      document.body.classList.remove('disable-scroll');
    }, 300);
  }

  private checkWindow(): void {
    if (window.innerWidth > 768) {
      this.globalStateServiceService.changeMobileVersionState(false);
    } else {
      this.globalStateServiceService.changeMobileVersionState(true);
    }
  }

  //TODO Fix routing on `Enter` event
  public avtiveNavItem(_itemIndex: number[], _event: any): void {
    this.sideNav_close();
    this.globalStateServiceService.navigationItemActive = _itemIndex;
  }

  public toggleNestedNavItem(_event: any, _nestedList: any): void {
    const currentTarget = _event.currentTarget;
    if (currentTarget.getAttribute('aria-expanded') === 'true') {
      currentTarget.classList.remove('expanded');
      currentTarget.setAttribute('aria-expanded', 'false');
      _nestedList.classList.remove('expanded');
      _nestedList.setAttribute('aria-expanded', 'false');
    } else {
      currentTarget.classList.add('expanded');
      currentTarget.setAttribute('aria-expanded', 'true');
      _nestedList.classList.add('expanded');
      _nestedList.setAttribute('aria-expanded', 'true');
    }
  }
}
