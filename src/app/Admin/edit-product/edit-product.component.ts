import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { ProductService } from '../../Service/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { format } from 'path';
import { FormModule } from '@coreui/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  categories: string[] = ['Living Room', 'Bedroom', 'Dining Room', 'Office Furniture', 'Outdoor Furniture', 'Storage Solutions'];
  stockOptions: string[] = ['In Stock', 'In Stock soon', 'Out of Stock']

  product: any = {
    title: '',
    description: '',
    price: null,
    warranty: '',
    productImages: '',
    category: '',
    color: '',
    material: '',
    seatingCapacity: null,
    weight: null,
    careAndMaintenance: '',
    stockStatus: '',
  };
  selectedFiles: File[] = [];

  constructor(private activateroute: ActivatedRoute, private productService: ProductService) { }


  productId: string | null = null;

  ngOnInit(): void {
    this.activateroute.params.subscribe(params => {
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

  onFileChange(event: any) {
    const files: FileList = event.target.files;

    this.selectedFiles = Array.from(files); // Convert FileList to Array

    if (this.selectedFiles.length > 0) {
      this.product.productImages = this.selectedFiles

    }


  }
  onSubmit() {
    console.log(this.product);

    this.productService.updateProduct(this.product, this.selectedFiles).subscribe(response => {
      alert("success")
    },
      error => {
        console.log(error);

      }
    )
  }
}
