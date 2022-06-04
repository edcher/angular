import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeatroComponent } from './teatro/teatro.component';
import { TeatroService } from './teatro/teatro.service';
import { CreateatroComponent } from './createatro/createatro.component';

@NgModule({
  declarations: [
    AppComponent,
    TeatroComponent,
    CreateatroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TeatroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
