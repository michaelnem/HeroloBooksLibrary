import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';

import { Book } from '../models/book';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpConnectionService {
  private readonly BooksApiUrl: string = 'https://www.googleapis.com/books/v1/';
  private queryString:          string = 'typescript';
  private booksAmount:          number = 34;
  private books:                Array<Book>;
  private type:                 string = 'books';
  private idPicker = 1;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http.get(
      this.BooksApiUrl + `volumes?q=${this.queryString}&printType=${this.type}&maxResults=${this.booksAmount}`
    ).pipe(
      map(res => {
        this.books = [];
        res['items'].forEach(book => {
          if (book['volumeInfo']['publishedDate'] && book['volumeInfo']['authors']) {
            const date = new Date(book['volumeInfo']['publishedDate']);
            this.books.push({ id:         this.id_picker(),
                              author:     book['volumeInfo']['authors'][0],
                              title:      book['volumeInfo']['title'],
                              published:  date.toISOString().slice(0, 10) });
                              // date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
          }
        });
        return this.books;
      }),
      catchError(this.handleError('getBooks', []))
    );
  }

  id_picker(): string {
    return '' + this.idPicker++;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      if (error.error) {
        console.error(error.error.error.message);
      }
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
