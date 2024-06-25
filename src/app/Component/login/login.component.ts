import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';
import Swal from 'sweetalert2';
import { User } from '../../Interface/user';

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
  username: any;
  password: any;
  loginError: any;

  user: User = {
    name: '',
    email: '',
    pasword: ''
  }
  constructor(private userService: UserService,private router:Router) { }

  login() {
    Swal.fire({
      title: 'Logging in...',
      text: 'Please wait while we log you in.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    this.userService.login(this.username, this.password).subscribe(
      (resp) => {
        Swal.close();  // Close the loader
        if (resp.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have been successfully logged in!'
          });
        }
        this.user = resp;
        if (this.user.roles?.includes("ADMIN")) {
            this.router.navigate(["/"])
        }
      },
      (error) => {
        Swal.close();  // Close the loader
        this.handleLoginError(error.status);
      }
    );
  }

  handleLoginError(statusCode: number) {
    let errorMessage = 'An error occurred during login.';
    let errorImage = '';  // You can add URLs to images based on status code here

    switch (statusCode) {
      case 400:
        errorMessage = 'Bad Request. Please check your input.';
        errorImage = 'https://via.placeholder.com/100x100.png?text=400+Bad+Request';
        break;
      case 401:
        errorMessage = 'Unauthorized. Please check your username and password.';
        errorImage = 'https://via.placeholder.com/100x100.png?text=401+Unauthorized';
        break;
      case 403:
        errorMessage = 'Forbidden You are not valid user.';
        errorImage = '../../../assets/images/403.png';
        break;
      case 500:
        errorMessage = 'Internal Server Error. Please try again later.';
        errorImage = 'https://via.placeholder.com/100x100.png?text=500+Server+Error';
        break;
      // Add more cases as needed
      default:
        errorMessage = 'An unexpected error occurred. Please try again later.';
        errorImage = 'https://via.placeholder.com/100x100.png?text=Error';
        break;
    }

    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: errorMessage,
      imageUrl: errorImage,
      imageHeight: 100,
      imageAlt: 'Error image'
    });
  }
}
