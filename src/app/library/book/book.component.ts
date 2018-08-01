import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../models/book';
import { HerroloLibraryService } from '../services/herrolo-library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private heroloLibrary: HerroloLibraryService) { }

  ngOnInit() {
  }

  toggleModal(modal: string): void {
    this.heroloLibrary.createModal(modal, this.book);
  }
}
