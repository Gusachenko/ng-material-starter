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

@NgModule({
  declarations: [
    AppComponent,
    AdaptiveNavigationPanelComponent,
    ChildControlsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
