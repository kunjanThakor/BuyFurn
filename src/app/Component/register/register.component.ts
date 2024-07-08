import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { User } from '../../Interface/user';
import { response } from 'express';
import { error, log } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // routerLink="/otp"


  user: User = {
    name: '',
    email: '',
    pasword: '',
  }

  constructor(private userSerive: UserService, private route: Router) { }
  registrationError: any;
  emailIdExits: any;
  generateOtp() {
    this.userSerive.generateOtp(this.user.email).subscribe(response => {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem("email", this.user.email.trim())
        sessionStorage.setItem("name", this.user.name)
        sessionStorage.setItem("pasword", this.user.pasword)
        this.route.navigate(['/verify-otp']);
      }

    },
      error => {
        if (error.status == 302) {
          this.emailIdExits = true;
        }
        else {
          this.registrationError = true;
        }
      }
    );
  }
}
