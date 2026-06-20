import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home';
import { OrderComponent } from '../app/Component/order/order';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component: OrderComponent },
];
