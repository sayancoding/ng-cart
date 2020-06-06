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
      name: 'Chicken Tikka',
      price: 120,
      imgUrl: '',
    },
    {
      id: 2,
      category: 'veg',
      name: 'Crispy Chilly Potato',
      price: 160,
      imgUrl: '',
    },
    {
      id: 3,
      category: 'roti',
      name: 'Roti with Tadka Combo ',
      price: 220,
      imgUrl: '',
    },
    {
      id: 10,
      category: 'roti',
      name: 'Roti with Chicken Kosa Combo ',
      price: 290,
      imgUrl: '',
    },
    {
      id: 4,
      category: 'veg',
      name: 'Paneer Pakoro',
      price: 180,
      imgUrl: '',
    },
    {
      id: 5,
      category: 'veg',
      name: 'Crispy Baby Corn',
      price: 220,
      imgUrl: '',
    },
    {
      id: 6,
      category: 'veg',
      name: 'Chilli Paneer Gravy',
      price: 200,
      imgUrl: '',
    },
    {
      id: 7,
      category: 'chicken',
      name: 'Chicken Kassa (4 Pc)',
      price: 225,
      imgUrl: '',
    },
    {
      id: 8,
      category: 'chicken',
      name: 'Chicken Do Pyaza (4 Pc)',
      price: 265,
      imgUrl: '',
    },
    {
      id: 9,
      category: 'chicken',
      name: 'Chicken Seekh Butter Masala',
      price: 325,
      imgUrl: '',
    },
    {
      id: 10,
      category: 'biryanis',
      name: 'Chicken Dum Biryanis',
      price: 255,
      imgUrl: '',
    },
    {
      id: 11,
      category: 'biryanis',
      name: 'Mutton Dum Biryanis',
      price: 255,
      imgUrl: '',
    },
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
}
