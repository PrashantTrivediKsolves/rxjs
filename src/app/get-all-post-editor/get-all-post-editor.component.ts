import { Component, OnInit } from '@angular/core';
import { AngularEditorService } from '../angular-editor.service';

@Component({
  selector: 'app-get-all-post-editor',
  templateUrl: './get-all-post-editor.component.html',
  styleUrls: ['./get-all-post-editor.component.css']
})
export class GetAllPostEditorComponent implements OnInit {
  
  constructor(private ss:AngularEditorService) { }
  Posts:any;
  ngOnInit(): void {
  }
  getpost()
  {
    this.ss.getAllAngularEditorContent().subscribe((res)=>
    {
      this.Posts=res;
    })
  }

}
