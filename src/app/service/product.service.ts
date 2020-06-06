import { Injectable } from '@angular/core';
import {Product} from '../model/product.model'


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      category: 'chicken',
      name: 'Chicken tikka',
      price: 220,
      imgUrl: '',
    },
    {
      id: 2,
      category: 'veg',
      name: 'Chicken tikka',
      price: 320,
      imgUrl: '',
    },
    {
      id: 3,
      category: 'roti',
      name: 'Chicken tikka',
      price: 420,
      imgUrl: '',
    },
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
}
