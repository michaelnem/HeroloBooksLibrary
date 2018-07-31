import { Component, OnInit } from '@angular/core';
import { HerroloLibraryService } from './services/herrolo-library.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Array<Book>;

  constructor(private heroloLib: HerroloLibraryService) { }

  ngOnInit() {
    this.heroloLib.currentState.subscribe(libBooks => {this.books = libBooks; console.log(this.books); });
    this.heroloLib.setLibraryBooks();
  }

}
