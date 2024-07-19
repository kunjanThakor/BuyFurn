import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any = {
    name: '',
    email: '',
    address: {
      address: '',
      pincode: '',
      city: '',
      state: ''
    },
    contactNumber: ''
  };

  address: any = {
    address: '',
    pincode: '',
    city: '',
    state: ''
  }
  onSubmit() {
    // debugger
    if (this.selectedFile) {
      if (this.user && this.user.email) {

        // this.user.address = this.address;

        console.log(this.user);

        this.userService.updateUser(this.user, this.selectedFile).subscribe(
          response => {
            console.log("success", response);

          },
          error => {
            console.log(error);

          }
        )
      }


    }
    else {
      if (this.user && this.user.email && this.address) {

        console.log(this.user);
        this.userService.updateUser(this.user).subscribe(
          response => {
            console.log("success", response);

          },
          error => {
            console.log(error);

          }
        )
      }
    }


  }




  selectedFile: File | null = null;

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }

  ngOnInit(): void {
    this.findByEmail();
  }

  findByEmail() {
    const username = sessionStorage.getItem('username');
    if (username) {
      this.userService.findByEmail(username).subscribe(
        response => {
          this.user = response || {}; // Assign response, or empty object if null
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Username is null or undefined');
    }
  }
}
