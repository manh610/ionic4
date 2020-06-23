import { Storage } from '@ionic/storage';
import { FavoriteService } from './../services/favorite.service';
import { NavController } from '@ionic/angular';
import { ProductsDTO } from './dto/productsDTO';
import { ProductService} from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteDTO } from '../favorite/dto/favoriteDTO';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products : ProductsDTO[] = [];
  constructor(
    private productService : ProductService,
    private navCtrl : NavController,
    private favService : FavoriteService,
    private storage : Storage,
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe( (product:ProductsDTO[]) => {
      this.products = product;
    }, _err => {
      console.log("error : get all product fail");
    })
  }

  async addFavorite(id : number) {
    const accId = await  this.storage.get('accountId');
    this.favService.create(accId,id).subscribe( (data:FavoriteDTO)=> {
      console.log('data: ',data);       
    }, error => {
      console.log(error);
    })
  }

  goCart() {
    this.navCtrl.navigateForward(['cart']);
  }

}
