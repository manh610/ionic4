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
  favorites : FavoriteDTO[];
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
      this.favorites = data;
      console.log("list fav : ",this.favorites);
    }, error => {
      console.log("error : ", error);
    })
  } 

}
