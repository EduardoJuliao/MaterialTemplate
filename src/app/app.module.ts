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

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolBarComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
