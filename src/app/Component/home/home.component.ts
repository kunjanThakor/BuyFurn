import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ProductSectionComponent } from '../products-all-section/product-section.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ProductSectionComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
