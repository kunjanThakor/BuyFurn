import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Service/admin.service';
import { response } from 'express';
import { User } from '../../Interface/user';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.adminService.getAllUsers().subscribe(
      response => {
        this.users = response
      },
      error => {
        console.error("Error in getting data", error);
      }
    );
  }

}
