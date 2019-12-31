
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from "./../app/store/Cart";
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';


@NgModule
({
        providers:[ProductRepository, StaticDataSource, 
                    Cart, Order, OrderRepository]
    })

export class ModelModule{

}