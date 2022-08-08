import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle = 'Some Links';
  favLinks = ['https://boardgamearena.com/', 'https://www.craiyon.com/'];
  constructor() { }

  ngOnInit() {
  }

}
