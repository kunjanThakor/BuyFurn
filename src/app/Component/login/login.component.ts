import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  forgotPassword() {
    throw new Error('Method not implemented.');
  }
  email: any;
  password: any;
  loginError: any;
  login() {
    console.log(this.email, this.password);

  }

}
