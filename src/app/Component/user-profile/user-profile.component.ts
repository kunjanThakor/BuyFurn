import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  hasProfile: boolean = false;
  decodeString: any;
  firstPosition: string | null = null;
  user: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUserData();
  }
  loadUserData() {

    if (sessionStorage.getItem("basicauth")) {
      this.userService.login().subscribe(
        response => {
          this.user = response;
          this.hasProfile = this.user.userImage && this.user.userImage !== "null";
          sessionStorage.setItem("username", this.user.email);
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  logout() {
    sessionStorage.removeItem('basicauth');
    this.router.navigate(['/']);
  }

  deleteMyAccount() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delteMyAccont().subscribe(
          response => {
            console.log(response);


            Swal.fire({
              title: "Deleted!",
              text: "Your account has been deleted.",
              icon: "success"
            }).then(() => {
              this.logout(); // Log out after account deletion
            });

            sessionStorage.removeItem('basicauth');
            this.router.navigate(['/']);
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }
}
