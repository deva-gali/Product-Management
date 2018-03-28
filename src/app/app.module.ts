import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './shared/Convert-To-Space-Pipe';
import { StarComponent } from './shared/star/star.component';
import { FilterItemsPipe } from './shared/FilterItemsPipe';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/products-details.component';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacePipe, StarComponent, FilterItemsPipe
    , WelcomeComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
     RouterModule.forRoot([
      {path: 'Home', component: WelcomeComponent},
      {path: 'Products', component: ProductListComponent},
      {path: 'Product/:id', component: ProductDetailsComponent},
      {path: '', component: WelcomeComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
