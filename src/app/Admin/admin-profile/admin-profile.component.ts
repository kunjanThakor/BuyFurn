import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  isProfileModalOpen = false;

  constructor(private router: Router) { }
  toggleProfileModal() {
    this.isProfileModalOpen = !this.isProfileModalOpen;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

  logout() {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('basicauth');
      this.router.navigate(['/']);

    }

  }

}
