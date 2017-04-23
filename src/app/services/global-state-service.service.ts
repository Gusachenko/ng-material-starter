import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalStateServiceService {

  private sideNavOpenSource = new Subject<boolean>();
  private mainContentScrollSource = new Subject<number>();

  public sideNavState = this.sideNavOpenSource.asObservable();
  public mainContentScrollState = this.mainContentScrollSource.asObservable();
  
  public changeSideNavState(state: boolean){
      this.sideNavOpenSource.next(state);
  }
  public changeMainContentScrollState(scrollValue: number){
      this.mainContentScrollSource.next(scrollValue);
  }
  
  constructor() { 
    
  }

}
