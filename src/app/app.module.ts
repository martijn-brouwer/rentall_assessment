import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAndUserBarComponent } from './components/search-and-user-bar/search-and-user-bar.component';
import { NavBreadcrumbsComponent } from './components/nav-breadcrumbs/nav-breadcrumbs.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ListComponent } from './components/productOverview/list/list.component';
import { ProductComponent } from './components/productOverview/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppBarcodeValidateDirective } from './utils/barcodeValidator';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndUserBarComponent,
    NavBreadcrumbsComponent,
    NavMenuComponent,
    ListComponent,
    ProductComponent,
    AppBarcodeValidateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
