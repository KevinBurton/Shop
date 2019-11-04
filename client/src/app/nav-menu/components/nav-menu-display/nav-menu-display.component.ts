import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-nav-menu-display',
  templateUrl: './nav-menu-display.component.html',
  styleUrls: ['./nav-menu-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuDisplayComponent {

  @Input() cartList: Cart;
  @Input() error: string;
  @Input() currentUser: User;
  @Output() logout = new EventEmitter();
  isExpanded = true;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  get cartCount(): number {
    return this.cartList ? this.cartList.length : 0;
  }
  get isAdmin(): boolean {
    return this.currentUser ? this.currentUser.isAdmin : false;
  }
  get isLoggedIn(): boolean {
    return this.currentUser ? true : false;
  }
  onLogout() {
    this.logout.emit();
  }
}
