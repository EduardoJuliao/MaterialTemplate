import { HomeComponent } from './core/home/home.component';
import { ToolBarComponent } from './core/toolbar/toolbar.component';
import { SideNavComponent } from './core/sidenav/sidenav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThemeModule } from './modules/theme.module';
import { SidenavService } from './core/sidenav/sidenav.service';
import { GalleryComponent } from './core/gallery/gallery.component';
import { NotificationModule } from './services/notification/notification.module';
import { NotificationComponent } from './core/notifications/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolBarComponent,
    HomeComponent,
    GalleryComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
    NotificationModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
