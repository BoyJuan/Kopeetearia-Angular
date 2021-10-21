import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  newOrder!: Order;
  alertMessage: string='';

  constructor(private service: Service) {
    this.newOrder = new Order();
  }

  ngOnInit(): void {
  }

  placeOrder(){
    this.service.addOrder(this.newOrder)
      .subscribe(
        (response) => {},
        (error) => {
          error='Unable to add order. Something went wrong.';
          this.service.alertType.next('alert-danger');
          this.service.message.next(error);
        }
      );

    this.newOrder = new Order();
  } 
}
