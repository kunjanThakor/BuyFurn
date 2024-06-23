import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
export interface Product {
  imageUrl: any;
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent {
  currentPage: number = 1;
  itemsPerPage: number = 15; // 3 columns * 5 rows
  totalPages: number = 1;

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredProducts = this.products.slice(start, end);
  }

  products: Product[] = [
    {
      id: 1, name: 'Chair', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'Table', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    },

    // Add more products as needed
  ];
  filteredProducts: Product[] = this.products;
  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  applyFilter() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToAddProduct() {
    this.router.navigate(['/products/new']);
  }

  viewProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }

  editProduct(productId: number) {
    this.router.navigate(['/products', productId, 'edit']);
  }

  deleteProduct(productId: number) {
    // Implement delete functionality here (e.g., calling a service)
    console.log('Delete product with id:', productId);
  }



}
