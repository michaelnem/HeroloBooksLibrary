import { Component, OnInit/*, HostListener, Inject*/ } from '@angular/core';
import { HerroloLibraryService } from '../../library/services/herrolo-library.service';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  stick: boolean = false;

  constructor(private heroloLib: HerroloLibraryService) { }
  newBook(): void {
    this.heroloLib.createModal('NEW', null);
  }
}
