import { Order } from './order.model';
import {Product} from './product.model';
import {observable, from, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class StaticDataSource {
 private products: Product[] = [
	new Product(1, "Flyraom Lace up shoe", "Category 1", "Sneaker Shoe (Category 1)", 100),
	new Product(2, "T-Shirt", "Category 1", "Sports T-shirt High Quality (Category 1)", 90),
	new Product(3, "TR Trail Shoe", "Category 1", "Running Shoes (Category 1)", 99),
	new Product(4, "Cooler", "Category 1", "High Quality Cooler (Category 1)", 50),
	new Product(5, "Graphic T-shirt Grey L", "Category 1", "Cotton T-shirt (Category 1)", 60),
    new Product(6, "Euphoria EDP 100 ml", "Category 2", "Liquid Amber, Black Violet, Cream, Mahogany Wood, (Category 2)",90),
	new Product(7, "Eternity Moment EDP 100 ml", "Category 2", "Brazilian Rose Woo, Cashmere Wood, Musk, S (Category 2)", 120),
	new Product(8, "In Red EDT 100 ml", "Category 2", "Lily, Jasmine, Violet Leaf, Rose, Blackcurrant, Pink (Category 2)", 130),
	new Product(9, "Flower Pink EDT 100 ml", "Category 2", "Othmani roses", 99),
	new Product(10, "Musk EDC 59 ml", "Category 2", "Musk EDC 59 ml", 88),
	new Product(11, "Shampoo", "Category 3", "Best Quality", 15),
];

//create method since we using injectable/observable
getProducts() : Observable<Product[]>
{
	return from([this.products]);
}

saveOrder(Order: Order) : Observable<Order>

{
	console.log(JSON.stringify(Order));
	return from ([Order]);
	
}

}