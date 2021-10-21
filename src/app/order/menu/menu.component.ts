import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imageSrc = 'assets/images/menu.png'  
  imageAlt = 'KopeeTearia'

  constructor() { }

  ngOnInit(): void {
  }

}
