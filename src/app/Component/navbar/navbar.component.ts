import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigateToProfileOrLogin(): void {
    if (sessionStorage.getItem("basicauth")) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
