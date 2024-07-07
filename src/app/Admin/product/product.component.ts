import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent {

  product: any = {
    title: "",
    description: "",
    price: "",
    warranty: "",
    category: ""
  };
  selectedFiles: File[] = [];

  constructor(private productService: ProductService) { }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = Array.from(files); // Convert FileList to Array
  }


  addProduct() {
    this.productService.addProduct(this.product, this.selectedFiles)
      .subscribe(response => {
        Swal.fire("Product added!");
        this.resetForm();
      }, error => {
        Swal.fire('Error adding product');
      });



  }

  resetForm() {
    const fileInput: HTMLInputElement = document.getElementById('images') as HTMLInputElement;
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

  @ViewChild('addProductModal') addProductModal!: ElementRef;


  openAddProductModal() {
    if (this.addProductModal) {
      const modal: any = this.addProductModal.nativeElement;
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-modal', 'true');
    }
  }

  closeAddProductModal() {
    if (this.addProductModal) {
      const modal: any = this.addProductModal.nativeElement;
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.removeAttribute('aria-modal');
    }
  }



}
