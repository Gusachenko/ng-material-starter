import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalStateServiceService {

  private sideNavOpenSource = new Subject<boolean>();
  private mobileVersionSource = new Subject<boolean>();
  private mainWrapperScrollSource = new Subject<number>();
  private controlsPanelScrollSource = new Subject<number>();
  private mainContentWidthSource = new Subject<number>();
  private childControlsPanelElementHeightSource = new Subject<number>();

  public sideNavState = this.sideNavOpenSource.asObservable();
  public mobileVersionState = this.mobileVersionSource.asObservable();
  public mainWrapperScrollState = this.mainWrapperScrollSource.asObservable();
  public controlsPanelScrollState = this.controlsPanelScrollSource.asObservable();
  public mainContentWidthState = this.mainContentWidthSource.asObservable();
  public childControlsPanelElementHeightState = this.childControlsPanelElementHeightSource.asObservable();
  
  public changeSideNavState(state: boolean){
      this.sideNavOpenSource.next(state);
  }
  public changeMobileVersionState(state: boolean){
      this.mobileVersionSource.next(state);
  }
  public changeMainWrapperScrollState(scrollValue: number){
      this.mainWrapperScrollSource.next(scrollValue);
  }
  public changeControlsPanelScrollState(scrollValue: number){
      this.controlsPanelScrollSource.next(scrollValue);
  }
  public changeMainContentWidthState(elementWidth: number){
      this.mainContentWidthSource.next(elementWidth);
  }
  public changeChildControlsPanelElementHeightState(elementHeight: number){
      this.childControlsPanelElementHeightSource.next(elementHeight);
  }
  
  constructor() {}

}
