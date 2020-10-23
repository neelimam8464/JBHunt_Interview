import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private dataService:DataService, private fb:FormBuilder) { }

  productId:any;
  product:any;
  zipCode:any;
  productForm:FormGroup;
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.productId=params.id;

    });
    this.dataService.getProductById(this.productId).subscribe((res)=>{
      this.product= res[0];
      this.createForm();
    });

    this.dataService.getZipCode().subscribe((res)=>{
      this.zipCode= res;
    })

  }

  createForm(){
    var p= {
      quantity:['', [Validators.required]],
      zipCode:[this.zipCode, [Validators.required]],
      
    }
    for (let i=0; i<this.product.customFields.length;i++){
      p[this.product.customFields[i].fieldName]=['',[Validators.required]]
    }
    this.productForm = this.fb.group(p);
  }

  addCart(){
    console.log(this.productForm.value);
  }

}
