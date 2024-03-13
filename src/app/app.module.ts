import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhNavbarComponent } from './wh-navbar/wh-navbar.component';
import { WhFooterComponent } from './wh-footer/wh-footer.component';
import { WhBodyComponent } from './wh-body/wh-body.component';
import { WhcardComponent } from './whcard/whcard.component';
import { WhCarouselComponent } from './wh-carousel/wh-carousel.component';
import { ApiService } from './service/api.service';
//import { APISearchService } from './service/api_search.service';
import { ItemComponent } from './item/item.component';
import { WhPromoBannerComponent } from './wh-promo-banner/wh-promo-banner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WhNavbarComponent,
    WhFooterComponent,
    WhBodyComponent,
    WhcardComponent,
    WhCarouselComponent,
    ItemComponent,
    WhPromoBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
