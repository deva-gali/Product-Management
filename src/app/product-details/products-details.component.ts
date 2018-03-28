import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';


@Component(
    {
        selector: 'app-product-details',
        templateUrl: './product-details.component.html'
    }
)
export class ProductDetailsComponent implements OnInit {
    constructor(private _activatdRoute: ActivatedRoute, private _productServie: ProductService) {
 }
    title = 'Product Details';
    product: IProduct;
    _productId: any;
    ngOnInit(): void {
    this._productId = this._activatdRoute.snapshot.params.id;
    this._productServie.getProduct(this._productId).subscribe(
        data => this.product = data, );
    }

}
