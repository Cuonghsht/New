import { Component } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { OrderService } from '../../API/Order';
import { Entity } from '../../API/Entity';
@Component({
  selector: 'app-order',
  imports: [FormsModule],
  templateUrl: './order.html',
  styleUrls: ['./order.scss'],
})
export class OrderComponent {
  constructor(private OrderService: OrderService) {}
   Quantity: number = 0;
   Price : number = 0;
   Name : string = '';
    Address : string = ''
    Phone : string = '';
    
   Tang (){
     this.Quantity++;
      this.Price = this.Quantity * 299000;
      console.log('Current Quantity:', this.Quantity);
      console.log('Current Price:', this.Price);
   }
   Giam(){
     if(this.Quantity > 1){
       this.Quantity--;
       this.Price = this.Quantity * 299000;
       console.log('Current Quantity:', this.Quantity);
       console.log('Current Price:', this.Price);
     }  
     }
    
     
    MuaHang()
    {
       
      const a  = {
        FullName: this.Name,
        Address: this.Address,
        PhoneNumber: this.Phone,
        Quantity: this.Quantity,
        Price: this.Price
      };
      
      this.OrderService.createOrder(a).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          alert('Đặt hàng thành công!');
        },
        (error) => {
          console.error('Error creating order:', error);
          alert('Đặt hàng thất bại. Vui lòng thử lại.');
        }
      );
    }
    
  }     


