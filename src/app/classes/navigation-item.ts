export class NavigationItem {
  public id: string;
  public name: string;
  public isActive = false;
  public type: 'item' | 'dropdown' = 'item';
  public navigation_items: NavigationItem[];
  constructor(
    id: string,
    name: string,
    isActive: boolean,
    type: 'item' | 'dropdown' = 'item',
    navigation_items: NavigationItem[] = []
  ) {
    this.id = id;
    this.name = name ? name : this.id;
    this.isActive = isActive;
    this.type = type;
    this.navigation_items = navigation_items;
  }
}
