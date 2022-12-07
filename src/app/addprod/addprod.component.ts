import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  prod: Product = new Product;
  constructor(private builder: FormBuilder, private service: ProductService, private router: Router) { }

  registerform: FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.registerform= this.builder.group({
      productname:['', Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
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
      this.service.saveProduct(this.prod).subscribe(x=>console.log(x));
      this.router.navigate(['prodlist']); 
    }
  }

}
