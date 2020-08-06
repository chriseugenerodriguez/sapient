import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// PAGES
import { ProductDetailsModule } from './modules/product-details/product-details.module';

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
    ProductDetailsModule,

    // SHARED
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
