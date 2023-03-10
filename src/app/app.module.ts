import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent-component/parent-component.component'
import { ChildComponent } from './child/child.component';

import 'zone.js'; 

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
