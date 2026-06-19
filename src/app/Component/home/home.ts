import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'; // 1. Import thêm
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImage = 0;
  images: string[] = [
    // Sửa thành:
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/4.jpg'
  ];
  private intervalId: any;

  // 2. Khai báo ChangeDetectorRef trong constructor
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length;
      
      // 3. Gọi hàm này để Angular biết cần vẽ lại template
      this.cdr.detectChanges(); 
      
      console.log('Current Image Index:', this.currentImage);
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}