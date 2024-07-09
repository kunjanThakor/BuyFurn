import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categories: string[] = ['Living Room', 'Bedroom', 'Dining Room', 'Office Furniture', 'Outdoor Furniture', 'Storage Solutions'];

  product: any = {
    title: '',
    description: '',
    price: null,
    warranty: '',
    category: '',
    color: '',
    material: '',
    seatingCapacity: null,
    weight: null,
    careAndMaintenance: ''
  };
  selectedFiles: File[] = [];

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = Array.from(files); // Convert FileList to Array

  }

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit() {
    this.productService.addProduct(this.product, this.selectedFiles)
      .subscribe(response => {
        Swal.fire("Product added!");
        this.resetForm();
        this.router.navigateByUrl('/admin/product')
      }, error => {
        Swal.fire('Error adding product. Try again..');
      });
  }

  resetForm() {
    const fileInput: HTMLInputElement = document.getElementById('productImages') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the value of the file input
    }
    // this.selectedFiles = []
    this.product = {
      title: '',
      description: '',
      price: "",
      warranty: "",
      category: '',

    };
  }

}
