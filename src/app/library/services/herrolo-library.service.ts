import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Book } from '../../models/book';
import { HttpConnectionService } from '../../Services/http-connection.service';

@Injectable({
  providedIn: 'root'
})
export class HerroloLibraryService {
  private books: Array<Book>;
  private booksSource: BehaviorSubject<Array<Book>> = new BehaviorSubject<Array<Book>>(this.books);
  currentState: Observable<Book[]> = this.booksSource.asObservable();

  @Output() toggleModal: EventEmitter<any> = new EventEmitter();
  @Output() toggleSpinner: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private conn: HttpConnectionService
  ) { }

  setLibraryBooks(): void {
    this.setSpinnerState(true);
    this.conn.getBooks().subscribe(
      booksRes => {
        this.books = booksRes;
        this.booksSource.next(this.books);
        this.setSpinnerState(false);
      }
    );
  }

  deleteBook(id: string): void {
    this.setSpinnerState(true);
    const index = this.books.findIndex(book => {
      return book.id ===  id;
    });
    if (index > 0) {
      this.books.splice(index, 1);
      this.booksSource.next(this.books);
    }
    this.destroyModal();
    setTimeout(() => {
      this.setSpinnerState(false);
    }, 200);
  }

  createModal(modal: string, book: Book): void {
    this.toggleModal.emit({ modal, book });
  }

  destroyModal(): void {
    this.toggleModal.emit(null);
  }

  setSpinnerState(state: boolean): void {
    this.toggleSpinner.emit(state);
  }
}
