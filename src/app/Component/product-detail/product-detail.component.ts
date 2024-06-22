import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  currentSlide: number = 0;
  nextSlide() {
    this.currentSlide = (this.currentSlide === this.product.imageUrls.length - 1) ? 0 : this.currentSlide + 1;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.product.imageUrls.length - 1 : this.currentSlide - 1;
  }
  product: any;
  quantity: number = 1;
  newQuestion: string = '';
  questions: any[] = [];

  ngOnInit(): void {
    // Adding dummy product data with multiple images
    this.product = {
      id: 1,
      title: 'Sample Product',
      price: 99.99,
      description: 'This is a sample product description.',
      imageUrls: [
        '../../../assets/images/product-2.png',
        '../../../assets/images/product-1.png',
        '../../../assets/images/product-3.png'
      ],
      details: 'Detailed information about the product.',
      warranty: '1 year warranty.'
    };
  }

  postQuestion(): void {
    if (this.newQuestion.trim()) {
      this.questions.push({
        text: this.newQuestion,
        answer: null // Admin can add an answer later
      });
      this.newQuestion = '';
    }
  }

}
