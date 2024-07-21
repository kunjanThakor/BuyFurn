import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { response } from 'express';
import { error } from 'console';
// src/app/models/product.model.ts

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
  @Input() filterText: string = '';

  loading: boolean = true;
  nofiltereditem: boolean = false;
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

      if (this.filteredProducts.length === 0) {
        console.log("No items");
        this.nofiltereditem = true;
      }

    } else {
      this.filteredProducts = this.products;
      this.nofiltereditem = false;
    }
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
        this.filteredProducts = this.products;
        this.filterProducts(); // Apply initial filtering if filterText is set
        this.loading = false
      },
      (error) => {
        console.error('Error fetching products', error);
        this.loading = false

      }
    );
  }
}
