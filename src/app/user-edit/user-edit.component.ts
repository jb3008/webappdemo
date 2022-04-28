import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private DataService: DataService) { }
  users:any;
  ngOnInit(): void {
    this.DataService.getUserState().subscribe(data => {
      this.users = data;
    })
  }

}
