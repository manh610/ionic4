import { Storage } from '@ionic/storage';
import { ProductsDTO } from './../product/dto/productsDTO';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  bill : number;
  productCart : ProductsDTO[] = [];
  constructor(
    private navCtrl : NavController,
    private storage : Storage
  ) { }

  ngOnInit() {
    this.Init();
  }

  Init() {
    this.storage.get("productCart").then((data:ProductsDTO[])=>{
      this.productCart = data;
      this.bill = 0;
      for ( var i = 0; i < this.productCart.length; i++) {
        this.bill += this.productCart[i].price;
      }
    }, err => {
      console.log(err);
    })
  }

  goBack() {
    this.navCtrl.navigateBack(['main']);
  }

  delete(id:number) {
    for ( var i = 0; i < this.productCart.length; i++) {
      if ( this.productCart[i].id === id ) {
        this.bill -= this.productCart[i].price;
        this.productCart.splice(i,1);
        this.storage.set("productCart",this.productCart);
        break;
      }
    }
  }

  goSetting() {
    this.navCtrl.navigateForward(['setting'])
  }

  goFavorite() {
    this.navCtrl.navigateForward(['favorite'])
  }

  goProduct() {
    this.navCtrl.navigateForward(['product'])
  }
}