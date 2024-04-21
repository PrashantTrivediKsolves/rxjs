import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationSubjct=new Subject<string>();
  constructor() { }

  sendNotification(data:any)
  {
    this.notificationSubjct.next(data)
  }

}
