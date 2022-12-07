import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';
import { UserLogin } from '../UserLogin';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userlogin: UserLogin= new UserLogin; 
  constructor(private builder: FormBuilder, private service: UserLoginService, private router: Router) { }

  registerform: FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.registerform= this.builder.group({
      Username:['', Validators.required],
      Password:['',Validators.required],
    })
  }

  get form(){
    return this.registerform.controls
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerform.invalid){
      return 
    }
    else{
      this.service.saveUserlogin(this.userlogin).subscribe(x=>console.log(x));
      this.router.navigate(['userlist']);

    }
  }


}
