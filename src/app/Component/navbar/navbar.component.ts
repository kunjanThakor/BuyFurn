import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private userService: UserService, private router: Router) { }

  navigateToProfileOrLogin(): void {

    if (sessionStorage.getItem("basicauth") != null) {
      this.userService.login().subscribe(
        response => {
          const roles = response.roles;
          if (roles.includes("ADMIN")) {
            console.log(roles);
            this.router.navigate(['/admin']);
          }
          else if (roles.includes("USER")) {
            this.router.navigate(['/userdashbord'])
          }

        },
        error => {
          console.error('Login failed', error);
        }
      );
    } else {
      this.router.navigate(['/login'])
    }

  }

}

