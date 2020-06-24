import { ProductsDTO } from './../product/dto/productsDTO';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { FavoriteService } from './../services/favorite.service';
import { FavoriteDTO } from './dto/favoriteDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  favorite : FavoriteDTO[];
  constructor(
    private favService : FavoriteService,
    private navCtrl : NavController,
    private storage : Storage,
  ) { }

  ngOnInit() {
    this.getFav();
  }

  async getFav() {
    const accId = await this.storage.get('accountId');
    this.favService.getByAcc(accId).subscribe( (data:FavoriteDTO[]) => {
      this.favorite = data;
      console.log("list favorite : ", this.favorite);
    }, error => {
      console.log("error : ", error);
    })
  } 

  goBack() {
    this.navCtrl.navigateBack(['main']);
  }
}
