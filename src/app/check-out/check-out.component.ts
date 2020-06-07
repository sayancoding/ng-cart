import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  checkOutItems: any[] = [];
  data:any = {}
  cartTotal = 0
  constructor(private _checkOut: CheckoutService) {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('checkout'));
    this.checkOutItems = this.data.data
     this.cartTotal =  JSON.parse(localStorage.getItem('total')).data
  }
  proceed(){
    alert(`Thank You for Your Interest..`)
  }
}
