import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems:any=[
    {id:1,name:'chiken tikkan',price:220,quantity:2},
    {id:1,name:'chiken tikkan',price:220,quantity:2},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
