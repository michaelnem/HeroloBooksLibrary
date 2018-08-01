import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HerroloLibraryService } from '../services/herrolo-library.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit, OnDestroy {
  @Input() book: Book;
  constructor(private heroloLib: HerroloLibraryService) { }

  ngOnInit() {
    console.log('Init edit modal');
  }

  ngOnDestroy() {
    console.log('Destory edit modal');
  }

  editBook(): void {
    
  }

  closeModal(): void {
    this.heroloLib.destroyModal();
  }
}
