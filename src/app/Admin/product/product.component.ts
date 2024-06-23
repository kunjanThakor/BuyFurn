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
  itemsPerPage: number = 6; // 3 columns * 2 rows
  totalPages: number = 1;
  products: Product[] = [
    {
      id: 1, name: 'Chair', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'Table', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    },
    {
      id: 1, name: 'Chair', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'Table', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    },
    {
      id: 1, name: 'a', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'B', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    },
    {
      id: 1, name: 'c', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'D', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    },
    {
      id: 1, name: 'E', price: 50,
      imageUrl: '../../../assets/images/couch.png'
    },
    {
      id: 2, name: 'F', price: 150,
      imageUrl: '../../../assets/images/bowl-2.png'
    }
    // Add more products as needed
  ];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter() {
    const filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.changePage(1);

  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).slice(start, end);

    console.log(this.filteredProducts.length);

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
