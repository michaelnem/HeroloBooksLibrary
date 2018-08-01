import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Book } from '../../models/book';
import { HerroloLibraryService } from '../services/herrolo-library.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit, OnDestroy {
  @Input() book: Book;
  
  constructor(private heroloLib: HerroloLibraryService) { }

  ngOnInit() {
    console.log('Init delete modal');
  }

  ngOnDestroy() {
    console.log('Destory delete modal');
  }

  deleteBook(): void {
    this.heroloLib.deleteBook(this.book.id);
  }

  closeModal(): void {
    this.heroloLib.destroyModal();
  }

}
