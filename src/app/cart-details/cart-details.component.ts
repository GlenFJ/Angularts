import { Cart } from "./../store/Cart";
import { Component, OnInit } from '@angular/core';


@Component({
  //selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  //styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
