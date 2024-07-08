import { NgFor } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { response } from 'express';
import { error } from 'console';
// src/app/models/product.model.ts

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
  @Input() filterText: string = '';

  constructor(private productService: ProductService) { }
  filteredProducts: any = [];

  products: any = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterText']) {
      this.filterProducts();
    }
  }

  filterProducts() {
    if (this.filterText) {
      console.log(this.filterText);
      this.filteredProducts = this.products.filter((product: any) =>
        product.title.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
        this.filteredProducts = this.products;
        this.filterProducts(); // Apply initial filtering if filterText is set
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
