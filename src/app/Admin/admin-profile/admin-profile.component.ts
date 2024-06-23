import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  isProfileModalOpen = false;

  toggleProfileModal() {
    this.isProfileModalOpen = !this.isProfileModalOpen;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

}
