import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
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

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
