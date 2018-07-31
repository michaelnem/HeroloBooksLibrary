import { NgModule } from '@angular/core';
import { HerroloLibraryService } from './services/herrolo-library.service';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';
import { BookComponent } from './book/book.component';
import { ClrIconModule } from '../../../node_modules/@clr/angular';

@NgModule({
  imports: [ CommonModule, ClrIconModule ],
  exports: [ LibraryComponent ],
  declarations: [ LibraryComponent, BookComponent ],
  providers: [ HerroloLibraryService ]
})
export class LibraryModule { }
