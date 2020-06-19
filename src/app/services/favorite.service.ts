import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(
    private http : HttpClient
  ) { }
  
  getByAcc(id : number ) {
    return this.http.get('http://localhost:3000/favorite/'+id);
  }

  create(accountId : number, productId : number) {
    let data : any = {
      accountId : accountId,
      productId : productId
    }
    return this.http.post('http://localhost:3000/favorite/add',data);
  }

}
