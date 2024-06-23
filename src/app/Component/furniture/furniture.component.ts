import { Component } from '@angular/core';
import { ProductSectionComponent } from '../products-all-section/product-section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [ProductSectionComponent, CommonModule, FormsModule],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
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
