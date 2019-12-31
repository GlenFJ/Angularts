import { Product } from './../../Model/product.model';
import { Injectable } from "@angular/core";


@Injectable()
export class Cart
{  //Attributes
    public Lines : CartLine[] = [];
    public itemcount : number=0;
    public cartPrice : number=0;

    //methods
    addLine(product:Product, quantity:number=1)
    {
        let line = this.Lines.find (line=> line.product.id==product.id);
        if (line!=undefined)

        {
            line.quantity+=quantity;
        }
        else
        {
            this.Lines.push(new CartLine(product, quantity));
        }
        //call the method of re-calc()
        this.recalculate();
    }

    updateQuantity (product : Product, quantity:number)

    {
        let line = this.Lines.find (line=> line.product.id==product.id);
        
        if(line!=undefined)
        {
            line.quantity = Number(quantity);
        }
        //recalc()
        this.recalculate();
    }

    removeLine(id:number)
    {
        let index= this.Lines.findIndex(line => line.product.id==id);
        this.Lines.splice(index,1);
        //Reclac
        this.recalculate();
    }
    clear()
    {
        this.Lines=[];
        this.itemcount=0;
        this.cartPrice=0;
    }

    //Recalc, Calc Product Quantity * Product Price, count, Price, Looping(how many product will be chosen)
    private recalculate()
    {
        this.itemcount=0;
        this.cartPrice=0;

        this.Lines.forEach(l=>
            {
                this.itemcount+=l.quantity;
                this.cartPrice+=(l.quantity *l.product.price);
            })
    }

}



export class CartLine
{
    constructor(public product:Product, public quantity : number)
    {

    }
    get lineTotal()
    {
        return this.quantity * this.product.price;
    }
}