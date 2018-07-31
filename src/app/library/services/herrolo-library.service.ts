import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Book } from '../../models/book';
import { HttpConnectionService } from '../../Services/http-connection.service';

@Injectable({
  providedIn: 'root'
})
export class HerroloLibraryService {
  private books: Array<Book>;
  private booksSource: BehaviorSubject<Array<Book>> = new BehaviorSubject<Array<Book>>(this.books);
  currentState = this.booksSource.asObservable();

  constructor(private conn: HttpConnectionService) { }

  setLibraryBooks(): void {
    this.conn.getBooks().subscribe(
      booksRes => {
        this.books = booksRes;
        this.booksSource.next(this.books);
      }
    );
  }
}
