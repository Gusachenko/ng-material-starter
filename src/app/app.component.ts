import { Component, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

import { GlobalStateServiceService, NavigationItem } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalStateServiceService]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') vc_sideNav;
  @ViewChild('maskmodal') vc_maskModal;

  public navigationItems: NavigationItem[];

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2) {
    renderer.listen(window, 'resize', event => {
      this.checkWindow();
    });

    this.navigationItems = globalStateServiceService.navigationItems;

    globalStateServiceService.maskModalState.subscribe(state => {
      if (state) {
        this.maskModalOpen();
      } else {
        this.maskModalClose();
      }
    });
  }

  ngAfterViewInit() {
    this.checkWindow();
    this.renderer.listen(window, 'scroll', event => {
      this.globalStateServiceService.changeMainWrapperScrollState(event.currentTarget.scrollY);
    });
  }

  private checkWindow(): void {
    if (window.innerWidth > 768) {
      this.globalStateServiceService.changeMobileVersionState(false);
    } else {
      this.globalStateServiceService.changeMobileVersionState(true);
    }
  }

  maskModalOpen(): void {
    document.body.classList.add('disable-scroll');
    this.vc_maskModal.nativeElement.classList.add('mask-modal_visible');
  }

  maskModalClose(): void {
    this.vc_sideNav.close();
    setTimeout(() => {
      this.vc_sideNav.visible = false;

      this.vc_maskModal.nativeElement.classList.remove('mask-modal_visible');
      document.body.classList.remove('disable-scroll');
    }, 300);
  }
}
