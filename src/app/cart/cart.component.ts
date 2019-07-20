import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items ;
  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}