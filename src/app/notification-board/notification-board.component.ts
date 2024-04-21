import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.css']
})
export class NotificationBoardComponent implements OnInit {
notificatonMessage:any;
  constructor(private notificationS:NotificationService) { }

  ngOnInit(): void {
    this.notificationS.notificationSubjct.subscribe(d=>{
      this.notificatonMessage=d;
    })
  }



}
