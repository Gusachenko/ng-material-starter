import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalStateServiceService {

  private sideNavOpenSource = new Subject<boolean>();
  private mobileVersionSource = new Subject<boolean>();
  private mainWrapperScrollSource = new Subject<number>();

  public sideNavState = this.sideNavOpenSource.asObservable();
  public mobileVersionState = this.mobileVersionSource.asObservable();
  public mainWrapperScrollState = this.mainWrapperScrollSource.asObservable();
  
  public changeSideNavState(state: boolean){
      this.sideNavOpenSource.next(state);
  }
  public changeMobileVersionState(state: boolean){
      this.mobileVersionSource.next(state);
  }
  public changeMainWrapperScrollState(scrollValue: number){
      this.mainWrapperScrollSource.next(scrollValue);
  }
  
  constructor() {}

}
