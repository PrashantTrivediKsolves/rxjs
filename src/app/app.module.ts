import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductDashBoardComponent } from './product-dash-board/product-dash-board.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {NotificationService} from './notification.service';
import { NotificationBoardComponent } from './notification-board/notification-board.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductDashBoardComponent,
    RxjsComponent,
    NotificationBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
