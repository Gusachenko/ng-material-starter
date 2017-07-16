import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalStateServiceService {

    private NAVIGATION_ITEMS: NavigationItem[] = [
        new NavigationItem('about', true),
        new NavigationItem('blog', false),
        new NavigationItem('contact', false)
    ];

    private sideNavOpenSource = new Subject<boolean>();
    private mobileVersionSource = new Subject<boolean>();
    private mainWrapperScrollSource = new Subject<number>();

    public sideNavState = this.sideNavOpenSource.asObservable();
    public mobileVersionState = this.mobileVersionSource.asObservable();
    public mainWrapperScrollState = this.mainWrapperScrollSource.asObservable();
  
    constructor() {}

    public changeSideNavState(state: boolean){
        this.sideNavOpenSource.next(state);
    }
    public changeMobileVersionState(state: boolean){
        this.mobileVersionSource.next(state);
    }
    public changeMainWrapperScrollState(scrollValue: number){
        this.mainWrapperScrollSource.next(scrollValue);
    }

    set navigationItemActive(itemIndex: number){
        for(let i = 0; i < this.NAVIGATION_ITEMS.length; i++){
            if(i === itemIndex){
                this.NAVIGATION_ITEMS[i].isActive = true;
            }else{
                this.NAVIGATION_ITEMS[i].isActive = false;
            }
        }
    }

    get navigationItems(): any {
        return this.NAVIGATION_ITEMS;
    }
}

export class NavigationItem {
    name: string;
    isActive: boolean = false;
    constructor(name: string, isActive: boolean){
        this.name = name;
        this.isActive = isActive;
    }
}