import { NgModule } from '@angular/core';
import { HerroloLibraryService } from './services/herrolo-library.service';
import { ClrIconModule } from '@clr/angular';

import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';
import { BookComponent } from './book/book.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ModalDirective } from './directives/modal.directive';
import { TitleformatPipe } from './pipes/titleformat.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookModalComponent } from './book-modal/book-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClrIconModule,
  ],
  exports: [LibraryComponent],
  declarations: [
    LibraryComponent,
    BookComponent,
    DeleteModalComponent,
    BookModalComponent,
    ModalDirective,
    TitleformatPipe
  ],
  providers: [],
  entryComponents: [
    BookModalComponent,
    DeleteModalComponent
  ]
})
export class LibraryModule { }
