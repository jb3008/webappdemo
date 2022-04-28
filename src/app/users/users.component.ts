import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { DataService } from "../data.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UserService: UserService, public router: Router, private DataService: DataService,) { }
  userList: any = [];
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.UserService.getUserData().subscribe(res => {
      console.log("Response received from the user type service", res);
      this.userList = res;
      console.log(this.userList)
    }, err => {
      console.log("An error occurred", err);
    });
  }

  editUser(item: any) {
    console.log(item)
    this.router.navigate(['/user-edit']);
    this.DataService.changeUserState(item);
  }
}
