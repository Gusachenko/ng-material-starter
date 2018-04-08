import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { NavigationItem } from '../classes/navigation-item';

@Injectable()
export class GlobalStateServiceService {
  private NAVIGATION_ITEMS: NavigationItem[] = [
    new NavigationItem('about', 'about', true),
    new NavigationItem('products', 'products', false, 'dropdown', [
      new NavigationItem('product1', 'product1', false),
      new NavigationItem('product2', 'Продукт 2', false)
    ]),
    new NavigationItem('contact', 'contact', false)
  ];

  private sideNavOpenSource = new Subject<boolean>();
  private maskModalSource = new Subject<boolean>();
  private mobileVersionSource = new Subject<boolean>();
  private mainWrapperScrollSource = new Subject<number>();

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
    for (let i = 0; i < this.NAVIGATION_ITEMS.length; i++) {
      if (this.NAVIGATION_ITEMS[i].navigation_items.length > 0) {
        for (let index = 0; index < this.NAVIGATION_ITEMS[i].navigation_items.length; index++) {
          this.NAVIGATION_ITEMS[i].navigation_items[index].isActive = false;
        }
        this.NAVIGATION_ITEMS[i].isActive = false;
      } else {
        this.NAVIGATION_ITEMS[i].isActive = false;
      }
    }
    for (let i = 0; i < this.NAVIGATION_ITEMS.length; i++) {
      if (i === itemIndex[0]) {
        if (itemIndex.length > 1) {
          for (let index = 0; index < this.NAVIGATION_ITEMS[i].navigation_items.length; index++) {
            if (index === itemIndex[1]) {
              this.NAVIGATION_ITEMS[i].navigation_items[index].isActive = true;
            } else {
              this.NAVIGATION_ITEMS[i].navigation_items[index].isActive = false;
            }
          }
        } else {
          this.NAVIGATION_ITEMS[i].isActive = true;
        }
      }
    }
  }

  get navigationItems(): any {
    return this.NAVIGATION_ITEMS;
  }
}
