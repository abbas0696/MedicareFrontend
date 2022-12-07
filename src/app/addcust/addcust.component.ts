import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcust',
  templateUrl: './addcust.component.html',
  styleUrls: ['./addcust.component.css']
})
export class AddcustComponent implements OnInit {

  cust: Customer= new Customer;
  constructor(private builder: FormBuilder, private service: CustomerService, private router: Router ) { }

  registerform: FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.registerform= this.builder.group({
      name:['', Validators.required],
      email:['',Validators.required,Validators.email],
      Address:['',Validators.required]
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
      this.service.saveCustomer(this.cust).subscribe(x=>console.log(x));
      this.router.navigate(['list']);

    }
  }

}
