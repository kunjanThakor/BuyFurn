import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Service/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";


  loginError: any;

  constructor(private userService: UserService, private router: Router) { }

  login(): void {

    let authString = 'Basic ' + btoa(this.username.trim() + ':' + this.password);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('basicauth', authString);
    }

    this.userService.login().subscribe(
      response => {
        const roles = response.roles;
        if (roles.includes("ADMIN")) {
          console.log(roles);
          this.router.navigate(['/admin']);
        }
        else {
          this.router.navigate([''])
          console.log(roles);

        }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }


  forgotPassword() {
    throw new Error('Method not implemented.');
  }
}
