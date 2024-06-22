import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
export interface Slide {
  imageUrl: string;
  captionTitle: string;
  captionText: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  cliced() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  slides: Slide[] = [
    {
      imageUrl: '../../../assets/images/couch.png',
      captionTitle: 'Couch',
      captionText: 'Some representative'
    },
    {
      imageUrl: '../../../assets/images/product-1.png',
      captionTitle: 'Nothing',
      captionText: 'placeholder content for'
    },
    {
      imageUrl: '../../../assets/images/product-2.png',
      captionTitle: 'Couch',
      captionText: 'the third slide.'
    }
  ];
}
