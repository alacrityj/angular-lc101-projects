import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Endless (2017)', 'Men', 'NOPE', 'Everything, Everywhere All at Once', 'Another Earth'];

   constructor() { }

   ngOnInit() {
   }

}
