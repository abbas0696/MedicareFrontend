import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {

  constructor(private service: ProductService, private activatedroute: ActivatedRoute) { }

  Product: Product
  ngOnInit(): void {
   const id = this.activatedroute.snapshot.paramMap.get('id');
   this.service.getProdById(Number(id)).subscribe(data=> this.Product=data);
  }

}
