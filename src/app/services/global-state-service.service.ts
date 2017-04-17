import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalStateServiceService {

  private sideNavOpenScource = new Subject<boolean>();

  public sideNavState = this.sideNavOpenScource.asObservable();
  
  public changeSideNavState(state: boolean){
      this.sideNavOpenScource.next(state);
  }
  
  constructor() { 
    
  }

}
