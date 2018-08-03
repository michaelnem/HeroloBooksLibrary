import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HerroloLibraryService } from '../services/herrolo-library.service';

import { dateCheck } from '../directives/date-check.directive';
import { titleExist } from '../directives/title-exists.directive';

import { Book } from '../../models/book';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  readonly booksNames: Array<string>;
  @Input() mode: Book;
  @Input() private book: Book;
  tempBook: Book;

  submitted: boolean = false;
  bookForm: FormGroup;
  today: Date = new Date();

  constructor(private heroloLib: HerroloLibraryService) {
    this.booksNames = this.heroloLib.getBooksName();
  }

  ngOnInit() {
    const titleControl = new FormControl('');
    if (this.book) {
      this.tempBook = Object.assign({}, this.book);
      titleControl.setValidators([
        Validators.required,
        titleExist(this.booksNames, this.book.title)
      ]);
    }
    else {
      this.tempBook = { id: '', title: '', author: '', published: '' };
      this.book = this.tempBook;
      this.tempBook = Object.assign({}, this.book);
      titleControl.setValidators([
        Validators.required,
        titleExist(this.booksNames)
      ]);
    }
    titleControl.setValue(this.tempBook.title);

    this.bookForm = new FormGroup({
      title: titleControl,
      author: new FormControl(this.tempBook.author, [
        Validators.required
      ]),
      published: new FormControl(this.tempBook.published, [
        Validators.required,
        dateCheck()
      ])
    });
  }

  get title() { return this.bookForm.get('title'); }
  get author() { return this.bookForm.get('author'); }
  get published() { return this.bookForm.get('published'); }

  editBook(): void {
    this.heroloLib.editBook(this.tempBook);
  }

  newBook(): void {
    this.heroloLib.newBook(this.tempBook);
  }

  onSubmit(): void {
    if (this.submitted && this.bookForm.valid) {
      this.tempBook.title = this.title.value;
      this.tempBook.author = this.author.value;
      this.tempBook.published = this.published.value;
      this.submitted = true;
      if (this.tempBook.id !== '') {
        this.editBook();
      }
      else {
        this.newBook();
      }
    }
    else { this.closeModal(); }
  }

  closeModal(): void {
    this.heroloLib.destroyModal();
  }

}
