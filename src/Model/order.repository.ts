
import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class OrderRepository
{
    private orders: Order[]=[];
    constructor(private dataSource: StaticDataSource)
    {

    }
    //Data Source which have product its self
    // Order which will get product from this DS

    getOrders() : Order[]
    {
        return this.orders;
    }
    saveOrder(Order: Order): Observable<Order>
    {
        return this.dataSource.saveOrder(Order);
    }

}