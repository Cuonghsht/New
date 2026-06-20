import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home';
import { OrderComponent } from '../app/Component/order/order';
import { ThankComponent } from './Component/thank-component/thank-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component: OrderComponent },
    { path: 'thankyou', component: ThankComponent }
    
];
