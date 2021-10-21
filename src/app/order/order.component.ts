import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  alertType: string= '';
  message: string='';

  constructor(private service: Service) { 
    this.service.alertType.subscribe((value) => {
      this.alertType = value;
    });
    this.service.message.subscribe((value) => {
      this.message = value;
      setTimeout(() => { 
        this.alertType = '';
        this.message = ''; 
      }, 5000);
    });
  }

  ngOnInit(): void {
  }

  removeAlert(){
    this.alertType = '';
    this.message = ''; 
  }

}
