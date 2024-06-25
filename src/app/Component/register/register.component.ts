import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../Interface/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService) { }


  switchToLogin() {
    throw new Error('Method not implemented.');
  }
  user: User = {
    name: '',
    email: '',
    pasword: ''
  }
  registrationSuccess: any;
  registrationError: any;
  register() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(resp => console.log(resp))
  }

}
