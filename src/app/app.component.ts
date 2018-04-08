import { Component, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

import { GlobalStateServiceService } from './services/global-state-service.service';
import { NavigationItem } from './classes/navigation-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalStateServiceService]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') vc_sideNav;

  maskModalVisible = false;
  navigationItems: NavigationItem[];

  constructor(private globalStateServiceService: GlobalStateServiceService, private renderer: Renderer2) {
    this.navigationItems = globalStateServiceService.navigationItems;

    globalStateServiceService.maskModalState.subscribe(state => {
      if (state) {
        this.maskModalOpen();
      } else {
        this.maskModalClose();
      }
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

  private checkWindow(): void {
    if (window.innerWidth > 768) {
      this.globalStateServiceService.changeMobileVersionState(false);
    } else {
      this.globalStateServiceService.changeMobileVersionState(true);
    }
  }

  maskModalOpen(): void {
    document.body.classList.add('disable-scroll');
    this.maskModalVisible = true;
  }

  maskModalClose(): void {
    this.vc_sideNav.close();
    setTimeout(() => {
      this.vc_sideNav.visible = false;
      this.maskModalVisible = false;
      document.body.classList.remove('disable-scroll');
    }, 300);
  }
}
