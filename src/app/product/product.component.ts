import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: IProduct;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  add(): void {
    localStorage.setItem('cart', JSON.stringify(this.product));
  }

}
