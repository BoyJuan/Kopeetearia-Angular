import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';
import { Order } from '../model/order';
import { OrderBill } from '../model/order-bill';
import { throwError, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private _refreshNeeded$ = new Subject<void>();
  alertType: Subject<string> = new Subject<string>();
  message: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  displayOrderList(){
    return this.http.get<Order[]>
    (`${API_URL}/orders`);
  }

  totalRegularBill(){
    return this.http.get<OrderBill>
    (`${API_URL}/total-regular-bill`);
  }

  totalDiscountedBill(){
    return this.http.get<OrderBill>
    (`${API_URL}/total-discounted-bill`);
  }

  addOrder(order: Order){
    return this.http
      .post(`${API_URL}/add`, order)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
          this.alertType.next('alert-success');
          this.message.next('Order is successfully added.')
        })
      );
  }

  updateOrder(order:Order){
    return this.http
      .put<Order>(`${API_URL}/update`, order)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
          this.alertType.next('alert-success');
          this.message.next('Order is successfully updated.')
        })
    );
  }

  deleteOrder(order:Order){
    return this.http
      .post<Order>(`${API_URL}/delete`, order)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
          this.alertType.next('alert-success');
          this.message.next('Order is successfully deleted.')
        })
    );
  }

  // private handleError(errorResponse: HttpErrorResponse){
  //   if(errorResponse.error instanceof ErrorEvent){
  //     console.error('Client Side Error: ', errorResponse.error.message)
  //   } else{
  //     console.error('Server Side Error: ', errorResponse)
  //   }
  //   return throwError('There is a problem');
  // }

}
