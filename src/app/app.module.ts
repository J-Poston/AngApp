import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreaterComponent } from './greater/greater.component';
import { BackStoryComponent } from './back-story/back-story.component';

@NgModule({
  declarations: [
    AppComponent,
    GreaterComponent,
    BackStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
