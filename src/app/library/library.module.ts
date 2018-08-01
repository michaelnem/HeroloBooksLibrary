import { NgModule } from '@angular/core';
import { HerroloLibraryService } from './services/herrolo-library.service';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';
import { BookComponent } from './book/book.component';
import { ClrIconModule } from '../../../node_modules/@clr/angular';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { ModalDirective } from './directives/modal.directive';
import { NewBookModalComponent } from './new-book-modal/new-book-modal.component';
import { TitleformatPipe } from './pipes/titleformat.pipe';

@NgModule({
  imports: [CommonModule, ClrIconModule],
  exports: [LibraryComponent],
  declarations: [
    LibraryComponent,
    BookComponent,
    DeleteModalComponent,
    EditModalComponent,
    NewBookModalComponent,
    ModalDirective,
    TitleformatPipe
  ],
  providers: [HerroloLibraryService],
  entryComponents: [
    EditModalComponent,
    DeleteModalComponent,
    NewBookModalComponent
  ]
})
export class LibraryModule { }
