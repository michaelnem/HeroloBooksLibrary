import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConnectionService } from './Services/http-connection.service';
import { LibraryModule } from './library/library.module';
import { HeaderComponent } from './layout/header/header.component';
import { HerroloLibraryService } from './library/services/herrolo-library.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LibraryModule
  ],
  providers: [ HttpConnectionService, HerroloLibraryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
