import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  incorrectUrlAlert: string = 'alert-danger';
  incorrectURL: string = 'Unsupported Webpage URL';

  constructor() {
    setTimeout(() => { 
      this.incorrectUrlAlert = '';
      this.incorrectURL = ''; 
    }, 2500);
  }

  ngOnInit(): void {
  }

  removeAlert(){
    this.incorrectUrlAlert = '';
    this.incorrectURL = ''; 
  }

}
