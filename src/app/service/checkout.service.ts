import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  subject = new Subject<any>()
  sendData(data){
    this.subject.next(data)
    
  }
  // getData(){
  //   return this.subject.asObservable()
  // }
  constructor() { }
}
