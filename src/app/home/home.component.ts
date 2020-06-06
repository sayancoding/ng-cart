import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products:Product[] = []

  constructor(private _productServive:ProductService) {}

  ngOnInit(): void {
    this.products = this._productServive.getProducts()
    console.log(this.products)
  }

  tabsValue: String[] = ['recommended', 'chicken', 'veg', 'roti'];
  titleValue: String[] = [
    'Recommended',
    'Chicken',
    'Veg Special',
    'Roti/Paratha',
  ];
  sectionTitle: String = 'Recommended';
  sectionId: String = 'recommended';
  getTab(event, name) {
    for (let i = 0; i < this.tabsValue.length; i++) {
      if (name == this.tabsValue[i]) {
        this.sectionTitle = this.titleValue[i];
        this.sectionId = this.tabsValue[i];
        break;
      }
    }
    console.log(event, name);
  }
}
