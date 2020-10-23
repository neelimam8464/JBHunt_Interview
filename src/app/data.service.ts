import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get('assets/data.json');
  }

  getProductById(id){
    return this.http.get('assets/data.json')
    .pipe(
      map((products:any[])=> products.filter(p=> p.id==id))
    )
  }

  getZipCode(){
    return of('07023');
  }

} 
