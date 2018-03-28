import { Component } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../shared/services/product.service';
import { error } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
selector : 'app-productlist',
templateUrl : './product-list.component.html',
styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    constructor( private _productService: ProductService) {

    }
   title  = 'Product List';
   showImg = false;
   filterByValue = '';
   products: IProduct[];
   searchSelectedValue = 'Name';
   searchDropDownValues: string[] = ['Name', 'Description', 'Code'];
   errorMessage: string;
   toggleImg(): void {
    this.showImg = !this.showImg;
    }
   ngOnInit(): void {
    this._productService.getProducts()
    .subscribe(
      products => this.products = products,
      // tslint:disable-next-line:no-shadowed-variable
      error => this.errorMessage = <any>error ); }
}
