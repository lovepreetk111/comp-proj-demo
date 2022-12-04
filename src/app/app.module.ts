import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureComponent } from './components/picture/picture.component';
import { TextComponent } from './components/text/text.component';
import { PictureWithTextComponent } from './components/picture-with-text/picture-with-text.component';
import { ComponentPlaceholderComponent } from './component-placeholder/component-placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    TextComponent,
    PictureWithTextComponent,
    ComponentPlaceholderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
