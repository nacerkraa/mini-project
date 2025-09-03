import { Routes } from '@angular/router';
import { ProductDetailComponent } from './features/product-detail/product-detail.js';
import { ProductListComponent } from './features/product-list/product-list.js';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' },
];
