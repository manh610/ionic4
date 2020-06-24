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

  delete(id:number) {
    this.favService.delete(id).subscribe( (data)=> {
      console.log('delete');
      for ( var i = 0; i < this.favorite.length; i++) {
        if ( this.favorite[i].id===id ) {
          this.favorite.splice(i,1);
          break;
        }
      }
    }, err => {
      console.log("delete error");
    });
  }
}
