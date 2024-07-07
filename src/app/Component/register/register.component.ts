import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  user: User = {
    name: '',
    email: '',
    pasword: '',
  }
  constructor(private userSerive: UserService) { }

  registrationSuccess: any;
  registrationError: any;

  register() {
    this.userSerive.register(this.user).subscribe(response => { console.log("Succes") }, error => {
      console.log("error");
    })
  }

  switchToLogin() {
    throw new Error('Method not implemented.');
  }

}
