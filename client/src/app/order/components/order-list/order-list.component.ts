import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent {
  @Input() orders: Order[];
  @Input() error: string;
}
