import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { MenuComponent } from './order/menu/menu.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/api', pathMatch: 'full' },
  { path: 'api', component: OrderComponent, children: [
    { path: '', component: MenuComponent},
    { path: '', component: AddOrderComponent},
    { path: '', component: OrderListComponent}
  ]},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
