import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentMessage:any;

  constructor(private serviceNotification:NotificationService) { }

  ngOnInit(): void {
    this.serviceNotification.notificationSubjct.subscribe(d=>
      {
        this.currentMessage=d;
      }
    )
  }

  sendMessage(data:any)
  {
    this.serviceNotification.sendNotification(data.value);
  }
}
