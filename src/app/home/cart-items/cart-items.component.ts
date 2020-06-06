import { Component, OnInit } from '@angular/core';
import { ProductMessengerService } from 'src/app/service/product-messenger.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal = 0;

  constructor(private _productMsg: ProductMessengerService) {}

  ngOnInit(): void {
    this._productMsg.getMsg().subscribe((data: any) => {
      if(data.op === 'add')
      this.addProduct(data.productItem);
      if (data.op === 'remove') this.removeProduct(data.productItem);
    });
  }

  removeProduct(product){
    if(this.cartItems.length > 0){
      for(let i in this.cartItems){
        if(this.cartItems[i].id == product.id && this.cartItems[i].quantity>0){
          this.cartItems[i].quantity--;
          this.cartTotal -= this.cartItems[i].price 
          break;
        }
      }
    }
  }
  addProduct(product) {
    let productExits = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        this.cartItems[i].quantity++;
        productExits = true;
        console.log(this.cartItems)
        break;
      }
    }

    if(!productExits){
      this.cartItems.push({
        id:product.id,
        name:product.name,
        price:product.price,
        quantity:1
      })
    }

    this.cartTotal = 0;
    this.cartItems.forEach((el) => {
      this.cartTotal += el.quantity * el.price;
    });
    console.log(this.cartTotal);
  }
}
