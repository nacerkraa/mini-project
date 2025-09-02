import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../data/product.service';
import { Product } from '../../data/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent implements OnInit {
  // private service = inject(ProductService);
  // products: Observable<Product[]> = this.service.getAll();

  products: Product[] = [];

  ngOnInit(): void {
    // Mock products (later you will fetch from backend API)
    this.products = [
      {
        id: 1,
        name: 'Brake Pads',
        price: '2500',
        imageUrl: '/images/products/image-1.jpg',
        shortDesc: 'fdsqfd',
        description: 'dsqfdsqfd',
      },
      {
        id: 2,
        name: 'Engine Oil',
        price: '1500',
        imageUrl: '/images/products/image-2.webp',
        shortDesc: 'fdsqfd',
        description: 'dsqfdsqfd',
      },
      {
        id: 3,
        name: 'Car Battery',
        price: '8000',
        imageUrl: '/images/products/image-3.jpg',
        shortDesc: 'fdsqfd',
        description: 'dsqfdsqfd',
      },
    ];
  }
}
