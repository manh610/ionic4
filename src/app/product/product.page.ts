import { Storage } from '@ionic/storage';
import { FavoriteService } from './../services/favorite.service';
import { NavController, AlertController } from '@ionic/angular';
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
  proCart : ProductsDTO[] = [];
  constructor(
    private productService : ProductService,
    private navCtrl : NavController,
    private favService : FavoriteService,
    private storage : Storage,
    private alertCtrl : AlertController,
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

  async addFavorite(id : number, title:string) {
    const accId = await  this.storage.get('accountId');
    this.favService.create(accId,id).subscribe( (data:FavoriteDTO)=> {
      this.addtoFavorite(title);       
    }, error => {
      console.log(error);
    })
  }

  goCart() {
    this.navCtrl.navigateForward(['cart'])
  }

  goBack() {
    this.navCtrl.navigateBack(['main']);
  }

  async addCart(id, title, description, price) {
    const data = new ProductsDTO;
    data.id = id;
    data.description = description;
    data.title = title;
    data.price = price;
    await this.storage.get("productCart").then( (data:ProductsDTO[])=> {
      this.proCart = data;
    })
    this.proCart.push(data);
    console.log("add cart : ", data);
    this.addtoCart(title);
    this.storage.set("productCart",this.proCart);
  }

  goFavorite() {
    this.navCtrl.navigateForward(['favorite']);
  }

  goSetting() {
    this.navCtrl.navigateForward(['setting']);
  }

  async addtoCart(title:string) {
    let alert = await this.alertCtrl.create({
      header : 'add '+title+' to cart'
    });
    await alert.present();
    setTimeout( () => {
      alert.dismiss();
    },1500);
  }

  async addtoFavorite(title:string) {
    let alert = await this.alertCtrl.create({
      header : 'add '+ title+ ' to favorite'
    }); 
    await alert.present();
    setTimeout( () => {
      alert.dismiss();
    },1500);
  }
}
