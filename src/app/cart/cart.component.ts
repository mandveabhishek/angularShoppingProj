import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}