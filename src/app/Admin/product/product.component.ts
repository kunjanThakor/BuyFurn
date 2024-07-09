import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {


  products: any = []
  loading: boolean = true;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response;
      this.loading = false;
    },
      error => {
        console.log(error);
        this.loading = false;

      })
  }
  deleteProduct(id: any) {
    this.productService.deleteProductById(id).subscribe(
      response => {
        if (response.status === 200) {
          this.loadProducts();
          console.log("Product deleted successfully", response);
        } else {
          console.log("Product deleted but with unexpected status code", response);
        }
      },
      error => {
        console.error("Error deleting product", error);
      }
    );
  }
  editProduct(id: any) {
    console.log(id);

  }


}
