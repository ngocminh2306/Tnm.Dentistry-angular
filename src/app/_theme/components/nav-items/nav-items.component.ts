import { NavItem, NavItemsService } from '@abp/ng.theme.shared';
import { Component, Input, TrackByFunction } from '@angular/core';

@Component({
  selector: 'abp-nav-items',
  templateUrl: 'nav-items.component.html',
  styles: [`
    .ant-menu-horizontal {
      height: 64px;
      border-bottom: none;
    }
  `]
})
export class NavItemsComponent {
  trackByFn: TrackByFunction<NavItem> = (_, element) => element.id;
  isCollapsed = false;
  constructor(public readonly navItems: NavItemsService) {}
}
