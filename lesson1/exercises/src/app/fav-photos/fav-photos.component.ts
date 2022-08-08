import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Old Vacay Photos';
  image1 = 'assets/images/lildaggersamsterdam.jpg';
  image2 = 'assets/images/lildaggerslajolla.jpg';
  image3 = 'assets/images/lildaggerstijuana.jpg';
  image4 = 'assets/images/laPetiteCeintureParis.jpg';

  constructor() { }

  ngOnInit() {
  }

}