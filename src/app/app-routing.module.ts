import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/productOverview/product/product.component';
import { ListComponent } from './components/productOverview/list/list.component';

const routes: Routes = [
  { path: 'products', component: ListComponent },
  { path: 'products/:key', component: ProductComponent },
  
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
