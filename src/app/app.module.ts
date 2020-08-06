import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// PAGES
import { HomeModule } from './modules/home/home.module';

// SHARED
import { SharedModule } from './shared/shared.module';

// ROUTING
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // ROUTING
    AppRoutingModule,

    // PAGES
    HomeModule,

    // SHARED
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
