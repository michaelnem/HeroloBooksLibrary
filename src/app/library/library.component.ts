import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HerroloLibraryService } from './services/herrolo-library.service';

import { ModalDirective } from './directives/modal.directive';

import { Book } from '../models/book';
import { BookModalComponent } from './book-modal/book-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Array<Book>;
  spinner: boolean = false;

  hostModalRefrence: ViewContainerRef;
  @ViewChild(ModalDirective) modalHost: ModalDirective;

  constructor(
    private heroloLib: HerroloLibraryService,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.hostModalRefrence = this.modalHost.viewContainerRef;
    this.heroloLib.toggleSpinner.subscribe(state => this.spinner = state);
    this.heroloLib.currentState.subscribe(libBooks => this.books = libBooks);
    this.heroloLib.toggleModal.subscribe(modalData => {
        if (modalData) {this.injectModal(modalData.modal, modalData.book); }
        else {this.clearModal(); }
    });
    this.heroloLib.setLibraryBooks();
  }

  // Injecting dynamic modal to DOM
  injectModal(modal: string, book: Book): void {
    let factory;
    
    switch (modal) {
      case 'EDIT': case 'NEW': {
        factory = this.cfr.resolveComponentFactory(BookModalComponent);
        break;
      }
      case 'DELETE': {
        factory = this.cfr.resolveComponentFactory(DeleteModalComponent);
        break;
      }
      default: break;
    }

    this.hostModalRefrence.clear();
    const modalRef = this.hostModalRefrence.createComponent(factory);

    (modalRef.instance)['book'] = book;
    (modalRef.instance)['mode'] = modal;
  }

  // clear dynamic modal form DOM
  clearModal(): void {
    this.hostModalRefrence.clear();
  }
}
