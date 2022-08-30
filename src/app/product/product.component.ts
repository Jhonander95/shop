import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ICart } from '../interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: IProduct;
  cart!: ICart[];

  /* @Input()
  product!: IProduct;
  cart: ICart[] = []; */

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  add(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cart.push({name: this.product.name, price: this.product.price, quantity: 1})
    console.log(this.product);
    
  }

}
