import { Component, OnInit/*, HostListener, Inject*/ } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stick: boolean = false;

constructor(/*@Inject(DOCUMENT) private document: Document*/) { }

  ngOnInit() {
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const topGape =  this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   this.stick = topGape > 0 ? true : false;
  // }
}
