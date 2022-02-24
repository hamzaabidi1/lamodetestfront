import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const basePath = environment.basePath;
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http: HttpClient) { }
  getProductDescription(productId: number) {
    return this._http.get<any>(`${basePath}/test/all/products/` + productId)
  }
  getProducts() {
    return this._http.get<any>(`${basePath}/test/all/products`)
  }
}
