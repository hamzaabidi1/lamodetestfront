import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
   products :any;
   selectedProduct:any

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.productServiceService.getProducts().subscribe(
    data => {
      this.products = data.products;
    }
    
  );

  }
  getProductDesc(event:any) {
    this.selectedProduct=null;
    this.productServiceService.getProductDescription(event.value.id).subscribe(
      data => {
        this.selectedProduct = data.product;
        console.log(this.selectedProduct)
      }
    );
  }

}
