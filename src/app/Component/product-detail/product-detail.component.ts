import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  productId: string | null = null;
  currentSlide: number = 0;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.productService.getProductById(this.productId).subscribe(
          response => {
            this.product = response;
          },
          error => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.product.productImages.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.product.productImages.length) % this.product.productImages.length;
  }
}
