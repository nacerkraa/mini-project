import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json');
  }

  getById(id: number): Observable<Product | undefined> {
    return this.getAll().pipe(map(list => list.find(p => p.id === id)));
  }
}
