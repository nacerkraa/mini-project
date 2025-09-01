import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.js';
import { ProductComponent } from './pages/product/product.js';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'product', component: ProductComponent }
];
