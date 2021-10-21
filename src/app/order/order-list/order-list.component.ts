import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  totalRegularBill: number = 0;
  totalDiscountedBill: number = 0;
  editOrder: Order;
  tempOrder: Order;
  editMode: boolean = false;

  constructor(
    private service: Service
  ) { 
    this.editOrder = new Order();
    this.tempOrder = new Order();
  }

  ngOnInit(): void {
    this.service.refreshNeeded$
      .subscribe(() => {
        this.refreshOrders();
      });
      this.refreshOrders();
  }

  refreshOrders(){

    this.service.displayOrderList()
      .subscribe(
        (response) => {
          this.orders = response;
        },
        (error) => {
          error='Cannot load details. Something went wrong.';
          this.service.alertType.next('alert-danger');
          this.service.message.next(error);
        }
      );
    this.service.totalRegularBill()
        .subscribe(
          response => {
            this.totalRegularBill = response.totalBill;
          },
          (error) => {
            error='Cannot load details. Something went wrong.';
            this.service.alertType.next('alert-danger');
            this.service.message.next(error);
          }
      );
    this.service.totalDiscountedBill()
      .subscribe(
        response => {
          this.totalDiscountedBill = response.totalBill;
        },
        (error) => {
          error='Cannot load details. Something went wrong.';
          this.service.alertType.next('alert-danger');
          this.service.message.next(error);
        }
    );
  }

  onDelete(order: Order){
    this.service.deleteOrder(order)
      .subscribe(        
        (response) => {},
        (error) => {
        error='Unable to delete order. Something went wrong.';
        this.service.alertType.next('alert-danger');
        this.service.message.next(error);
      });
  }

  onEdit(order: Order){
    this.tempOrder = order;
    this.editMode = true;
    this.fillEditRow(this.tempOrder);
  }

  fillEditRow(order: Order){
    this.editOrder.id = order.id;
    this.editOrder.orderName = order.orderName;
    this.editOrder.price = order.price;
    this.editOrder.isDiscounted = order.isDiscounted;
    this.editOrder.discountPercentage = order.discountPercentage;
  }

  onCancel(){
    this.editOrder = new Order();
    this.editMode = false;
  }

  onUpdate(updateOrder: Order){
    this.service.updateOrder(updateOrder)
      .subscribe(
        (response) => {},
        (error) => {
          error='Unable to update order. Something went wrong.';
          this.service.alertType.next('alert-danger');
          this.service.message.next(error);
        }
      );
      this.editOrder = new Order();
      this.editMode = false;
  }
  

}
