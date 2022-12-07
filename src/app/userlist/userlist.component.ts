import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { UserLogin } from '../UserLogin';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service: UserLoginService) { }

  userlogin : UserLogin[];

  ngOnInit(): void {
    this.service.getAllUserLogin().subscribe(data=>this.userlogin=data)
  }

}
