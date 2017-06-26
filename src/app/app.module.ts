import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AdaptiveNavigationPanelComponent } from './components/adaptive-navigation-panel/adaptive-navigation-panel.component';
import { ChildControlsPanelComponent } from './components/adaptive-navigation-panel/child-controls-panel/child-controls-panel.component';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { PageAboutComponent } from './components/routes/page-about/page-about.component';
import { PageBlogComponent } from './components/routes/page-blog/page-blog.component';
import { PageContactComponent } from './components/routes/page-contact/page-contact.component';
import { PageNotFoundComponent } from './components/routes/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdaptiveNavigationPanelComponent,
    ChildControlsPanelComponent,
    PageAboutComponent,
    PageBlogComponent,
    PageContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
