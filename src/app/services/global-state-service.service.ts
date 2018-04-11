import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { NavigationItem } from '../classes/navigation-item';

const NAVIGATION_ITEMS: NavigationItem[] = [
  new NavigationItem('about', 'About', true),
  new NavigationItem('products', 'Products', false, 'dropdown', [
    new NavigationItem('product1', 'Product 1', false),
    new NavigationItem('product2', 'Product 2', false)
  ]),
  new NavigationItem('contact', 'Contact', false)
];

@Injectable()
export class GlobalStateServiceService {
  
  private sideNavOpenSource = new Subject<boolean>();
  private maskModalSource = new Subject<boolean>();
  private mobileVersionSource = new Subject<boolean>();
  private mainWrapperScrollSource = new Subject<number>();

  public currentNavigationItem: NavigationItem;
  public sideNavState = this.sideNavOpenSource.asObservable();
  public maskModalState = this.maskModalSource.asObservable();
  public mobileVersionState = this.mobileVersionSource.asObservable();
  public mainWrapperScrollState = this.mainWrapperScrollSource.asObservable();

  constructor() {}

  public changeSideNavState(state: boolean) {
    this.sideNavOpenSource.next(state);
  }
  public changeMaskModalState(state: boolean) {
    this.maskModalSource.next(state);
  }
  public changeMobileVersionState(state: boolean) {
    this.mobileVersionSource.next(state);
  }
  public changeMainWrapperScrollState(scrollValue: number) {
    this.mainWrapperScrollSource.next(scrollValue);
  }

  set navigationItemActive(itemIndex: number[]) {
    for (let i = 0; i < NAVIGATION_ITEMS.length; i++) {
      if (NAVIGATION_ITEMS[i].navigation_items.length > 0) {
        for (let index = 0; index < NAVIGATION_ITEMS[i].navigation_items.length; index++) {
          NAVIGATION_ITEMS[i].navigation_items[index].isActive = false;
        }
        NAVIGATION_ITEMS[i].isActive = false;
      } else {
        NAVIGATION_ITEMS[i].isActive = false;
      }
    }
    for (let i = 0; i < NAVIGATION_ITEMS.length; i++) {
      if (i === itemIndex[0]) {
        if (itemIndex.length > 1) {
          for (let index = 0; index < NAVIGATION_ITEMS[i].navigation_items.length; index++) {
            if (index === itemIndex[1]) {
              this.currentNavigationItem = NAVIGATION_ITEMS[i].navigation_items[index];
              NAVIGATION_ITEMS[i].navigation_items[index].isActive = true;
            } else {
              NAVIGATION_ITEMS[i].navigation_items[index].isActive = false;
            }
          }
        } else {
          this.currentNavigationItem = NAVIGATION_ITEMS[i];
          NAVIGATION_ITEMS[i].isActive = true;
        }
      }
    }
  }

  get navigationItems(): any {
    return NAVIGATION_ITEMS;
  }
}
