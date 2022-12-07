import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.css']
})
export class CustlistComponent implements OnInit {

  constructor(private service: CustomerService) { }

  customer : Customer[];

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe(data=>this.customer=data)
  }

  delete(id:number){
    this.customer= this.customer.filter(c=>c.id!==id)
    this.service.deleteCustomer(id).subscribe(data=>console.log(data));
  }

}
