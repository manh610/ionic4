import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient,
  ) { }

  getAll() {
    return this.http.get('http://localhost:3000/product');
  }

  changeStatus(id:number,sTatus:boolean) {
    let data : any = {
      id : id,
      status : !sTatus
    }
    return this.http.put('http://localhost:3000/product',data);
  }
}
