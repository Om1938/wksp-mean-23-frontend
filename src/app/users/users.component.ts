import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  userService = inject(UserService);

  constructor() {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
