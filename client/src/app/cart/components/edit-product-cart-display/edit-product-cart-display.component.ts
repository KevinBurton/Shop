import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product-cart-display',
  templateUrl: './edit-product-cart-display.component.html',
  styleUrls: ['./edit-product-cart-display.component.css']
})
export class EditProductCartDisplayComponent {

  @Input() productCartForm: FormGroup;
  @Input() product: Product;
  @Output() submitted = new EventEmitter<number>();

  onSubmit() {
    this.submitted.emit(this.productCartForm.get('quantity').value);
  }
}
