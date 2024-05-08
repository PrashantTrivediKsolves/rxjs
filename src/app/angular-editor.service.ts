import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AngularEditorService {

  constructor(private http:HttpClient,private route:Router) { }

  addEditorContent(data:any)
  {
    this.http.post("http://localhost:8000/add-AngularEditor",data,{observe:'response'}).subscribe((res)=>
      {
        console.log(res);

            this.route.navigate(["/getAll"]);

      })
  }
  getAllAngularEditorContent()
  {
    return this.http.get("http://localhost:8000/get-Angular-blogs");
  }


}
