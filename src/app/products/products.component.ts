import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }

  products:any;

  ngOnInit() {
     this.getProducts();
  }

  getProducts(){
    this.dataService.getProducts().subscribe((res)=>{
      this.products = res;
      console.log(this.products);
    })
  }

  openProductDetails(id){
    this.router.navigate(['/productDetails/'+id])
  }

}
