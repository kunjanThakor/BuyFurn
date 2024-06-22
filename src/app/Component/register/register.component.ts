import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  switchToLogin() {
    throw new Error('Method not implemented.');
  }
  fullName: any;
  email: any;
  username: any;
  password: any;
  registrationSuccess: any;
  registrationError: any;
  register() {
    throw new Error('Method not implemented.');
  }

}
