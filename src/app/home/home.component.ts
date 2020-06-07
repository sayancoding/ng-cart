import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  wiseProducts: Product[] = [];

  constructor(private _productServive: ProductService) {

  }

  ngOnInit(): void {
    this.products = this._productServive.getProducts();
            for (let i in this.products) {
              if (this.products[i].category === 'biryanis') {
                this.wiseProducts.push(this.products[i]);
              }
            }
    // console.log(this.products);
  }

  tabsValue: String[] = ['biryanis', 'chicken', 'veg', 'roti'];
  titleValue: String[] = ['Biryanis', 'Chicken', 'Veg Special', 'Roti/Paratha'];
  sectionTitle: String = 'Biryanis';
  sectionId: String = 'biryanis';
  getTab(event, name) {
    for (let i = 0; i < this.tabsValue.length; i++) {
      if (name == this.tabsValue[i]) {
        this.sectionTitle = this.titleValue[i];
        this.sectionId = this.tabsValue[i];
        break;
      }
    }
    this.wiseProducts = [];
    for (let i in this.products) {
      if (this.products[i].category === name) {
        this.wiseProducts.push(this.products[i]);
      }
    }
    console.log(this.wiseProducts, name);
  }
}
