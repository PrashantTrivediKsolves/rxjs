import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscription ,interval} from 'rxjs';
import {filter} from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-product-dash-board',
  templateUrl: './product-dash-board.component.html',
  styleUrls: ['./product-dash-board.component.css']
})
export class ProductDashBoardComponent implements OnInit ,OnDestroy{
  private mySubscription: Subscription= new Subscription();
  constructor() { }
  ngOnInit(){
    // promise

    const promise=new Promise(resolve=>
      {
        console.log("promise call.........");
        setTimeout(()=>
        {
          resolve("Promise working")
          resolve("Promise working1")
          resolve("Promise working2")
          resolve("Promise working2")
        },1000)
      }
    )
    // promise.then((res)=>
    // {
    //   console.log(res);
    // })
    const observable=new Observable(sub=>
      {
        console.log("obserale call.......");
        let counter=0;
        setInterval(()=>
        {
          // sub.next("Obserable working");
          // sub.next("Obserable working1");
          // sub.next("Obserable working2");
          counter=counter+1;
          sub.next(counter);
        },1000);
      }
    )
    // observable.pipe(
    //   filter((d)=>d==="Obserable working1")
    // ).
   this.mySubscription= observable.subscribe(result=>console.log(result));
  }

  ngOnDestroy():void{
    if(this.mySubscription)
    {
      this.mySubscription.unsubscribe();
    }
  }
}
