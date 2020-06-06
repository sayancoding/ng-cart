import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductMessengerService } from 'src/app/service/product-messenger.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() productItem:Product
  constructor(private _productMsg:ProductMessengerService) {}

  ngOnInit(): void {
    // console.log(this.productItem)
  }
  data:object = {}
  sendDate(op){
    this.data = {
      op : op,
      productItem : this.productItem
    }
    this._productMsg.sendMsg(this.data)
  }
}
