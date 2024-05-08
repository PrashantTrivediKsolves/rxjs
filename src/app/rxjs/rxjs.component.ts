import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable,ReplaySubject,Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import { domainToASCII } from 'url';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

    // Obserables are unicast

    // const observable=new Observable((obj)=>obj.next(Math.random()));

    // // subscriber1
    // observable.subscribe((d)=>console.log(d));

    // // subscriber2
    // observable.subscribe((d)=>console.log(d));

    // Sbject

    // const subject=new Subject();
    // // subscriber1
    // subject.subscribe(d=>console.log(d));

    // // subscriber2

    // subject.subscribe(d=>console.log(d));

    // subject.next(Math.random());


    // the default behaviour of obserable is unicast

    // if we have multiple subscriber they all have its own execution(they will indivisually call the api )


    // const data=ajax("https://jsonplaceholder.typicode.com/users");

    // data.subscribe(d=>console.log(d));
    // data.subscribe(d=>console.log(d));

    // const subject=new Subject();

    // const data=ajax("https://jsonplaceholder.typicode.com/users");

    // subject.subscribe(d=>console.log(d));
    // subject.subscribe(d=>console.log(d));
    // const result=data.subscribe(subject);// here i am using subject as a data consumer

    // console.log(result);


// subject

    // const subject=new Subject();

    // subject.subscribe(d=>console.log(d));
    // subject.subscribe(d=>console.log(d));
    // subject.subscribe(d=>console.log(`Subject Subscriber1 : ${d}`));
    // subject.next(2020);

    // subject.subscribe(d=>console.log(`Subject Subscriber2 : ${d}`));
    // // nothing...

    // // subject.next(22);
    // // const result=data.subscribe(subject);


    // // behavior subject examples...

    // const bSuject=new BehaviorSubject<number>(12);

    // bSuject.subscribe(d=>console.log(`BehaviorSubject Subscriber 1 ${d}`));

    // bSuject.next(200);

    // bSuject.subscribe(d=>console.log(`BehaviorSubject Subscriber 1 ${d}`));

    //  ReplaySubject..........

    // const $message=new ReplaySubject(2);// it will hold only two value in the buffer...

    // $message.next("Hello..");
    // $message.next("How are you  ?");

    // $message.next("From whare are you");
    // $message.next("Stay at Home ?");

    // $message.subscribe(msg=>console.log(`User1: ${msg}`));

    // $message.next("Get Vaccinated...");
    // $message.next("Keep Learning...");

    // $message.subscribe(msg=>console.log(`User2: ${msg}`));

    // async subject

    // const asyncSubject$=new AsyncSubject();

    // asyncSubject$.next("Value1");
    // asyncSubject$.next("Value2");
    // asyncSubject$.next("Value3");

    // asyncSubject$.subscribe(d=>console.log(`User1 ${d}`));
    // asyncSubject$.complete();
    // asyncSubject$.next("Value4");
    // asyncSubject$.next("Value5");

    // asyncSubject$.subscribe(d=>console.log(`User1 ${d}`));

    const url="https://restcountries.com/v3.1/name/india?fullText=true";
    const cache:{ [url: string]: Observable<any> } = {};
    function getCountryInfo(url:string)
    {
      if(!cache[url])
        {
          // api call using fetch..

          cache[url]=new AsyncSubject();
          fetch(url).then(res=>res.json()).
          then(d=>
            {

            }
          )
        }
    }

  }

}
