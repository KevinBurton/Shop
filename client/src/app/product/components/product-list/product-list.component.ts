import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  @Input() products: Product[];
  @Input() currentUser: User;
  @Input() error: string;
  @Output() addToCart = new EventEmitter<Product>();

  addToCartNotification(value: Product): void {
    this.addToCart.emit(value);
  }
}
