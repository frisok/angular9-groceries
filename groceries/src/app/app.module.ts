import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemsComponent } from './grocery-items/grocery-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroceryListComponent,
    GroceryItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
