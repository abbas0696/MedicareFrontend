import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  constructor(private service: ProductService) { }

  product: Product[];
  ngOnInit(): void {
    this.service.getAllProduct().subscribe(data=> this.product=data);
  }
  delete(id:number){
    this.product=this.product.filter(c=> c.id!==id)
    this.service.deleteProduct(id).subscribe(data=>console.log(data))
  }

}
