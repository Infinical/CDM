import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { defaultNavItems, NavData } from '../../_nav';

import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {


  allMenus: string[] = ['System Setup', 'Users', 'CDM Maintenance', 'Reports', 'Vendors'];
  allowedMenus: string[] = [];
  subscription: Subscription;

  private notAllowed: string[] = [];

  public navItems = defaultNavItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private menusService: MenusService, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    this.menusService.currentMessage
      .subscribe(message => {
        if (message.trim() !== '') {
          this.allowedMenus.push(message);
        }
      });

    for (const i in this.allMenus) {
      if (!(this.allowedMenus.includes(this.allMenus[i]))) {
        this.notAllowed.push(this.allMenus[i]);
      }
    }

    this.notAllowed = this.allMenus.filter(item => this.allowedMenus.includes(item));

    for (const i in this.notAllowed) {
      this.navItems = this.navItems.filter(item => item.name !== this.notAllowed[i]);
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.changes.disconnect();
  }
}
