import { NgFor } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
// src/app/models/product.model.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
  @Input() filterText: string = '';

  filteredProducts: Product[] = [];

  products: Product[] = [
    {
      id: 1,
      title: 'Nordic Chair',
      price: 50.00,
      image: '../../../assets/images/product-1.png'
    },
    {
      id: 2,
      title: 'Kruzo Aero',
      price: 75.00,
      image: '../../../assets/images/product-2.png'
    },
    {
      id: 3,
      title: 'Ergonomic Chair',
      price: 120.00,
      image: '../../../assets/images/product-3.png'
    }
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterText']) {
      this.filterProducts();
    }
  }

  filterProducts() {
    if (this.filterText) {
      console.log(this.filterText);
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  ngOnInit() {
    this.filteredProducts = this.products;
  }
}
