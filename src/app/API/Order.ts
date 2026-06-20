import { Inject,Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import {Entity} from "../API/Entity";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://be-m37u.onrender.com/api/Order';
  constructor(private http: HttpClient) {}

  createOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderData);
  }

}