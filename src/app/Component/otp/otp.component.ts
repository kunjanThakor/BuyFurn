import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { response } from 'express';
import { error } from 'console';
import { User } from '../../Interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  verificationError: any;

  constructor(private userservice: UserService, private router: Router) { }
  email: any = sessionStorage.getItem("email");
  otp: any;


  user: any = {
    name: '',
    email: '',
    pasword: ''
  }

  verifyOtp() {

    this.userservice.verifyOtp(this.email, this.otp).subscribe(response => {
      if (response == true) {
        console.log("successs");
        this.user.email = sessionStorage.getItem("email")
        this.user.name = sessionStorage.getItem("name")
        this.user.pasword = sessionStorage.getItem("pasword")


        this.userservice.register(this.user).subscribe(response => {
          if (response) {
            sessionStorage.clear();
            this.router.navigate(['/login']);
          }

        }, error => {
          console.log(error);

        })

      }
      else {
        this.verificationError = true;
      }

    },
      error => {
        console.log(error);
      }
    )
  }

}
