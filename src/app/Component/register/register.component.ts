import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { User } from '../../Interface/user';
import { response } from 'express';
import { error, log } from 'console';
import { EmailService } from '../../Service/email.service';

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

  EmailRequest: any = {
    to: '',
    subject: '',
    text: ''
  }

  constructor(private userSerive: UserService, private route: Router, private emailService: EmailService) { }
  registrationError: any;
  emailIdExits: any;
  generateOtp() {
    this.userSerive.generateOtp(this.user.email).subscribe(response => {
      console.log(response);

      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem("email", this.user.email.trim())
        sessionStorage.setItem("name", this.user.name)
        sessionStorage.setItem("pasword", this.user.pasword)

        this.EmailRequest.to = this.user.email.trim();
        this.EmailRequest.subject = "Email Verification";
        this.EmailRequest.text = response;

        this.emailService.sendMail(this.EmailRequest).subscribe(mailResponse => {
          console.log('Email sent successfully:', mailResponse);
          this.route.navigate(['/verify-otp']);
        }, mailError => {
          console.error('Error sending email:', mailError);
          this.registrationError = true;
        });
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
