import { Component } from '@angular/core';
import { ProductSectionComponent } from '../products-all-section/product-section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductSectionComponent, CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  onCategoryChange() {
    throw new Error('Method not implemented.');
  }

  filterText: string = '';

  search: string = '';
  selectedCategory: any;


  onSearch() {
    this.search = this.filterText
  }

}
