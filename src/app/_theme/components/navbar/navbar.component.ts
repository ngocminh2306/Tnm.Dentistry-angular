import { ApplicationInfo, EnvironmentService, SubscriptionService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'abp-navbar',
  templateUrl: './navbar.component.html',
  providers: [LayoutService, SubscriptionService],
})
export class NavbarComponent {
  constructor(public service: LayoutService) {}
}
