import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDashBoardComponent } from './product-dash-board/product-dash-board.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GetAllPostEditorComponent } from './get-all-post-editor/get-all-post-editor.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"product",
    component:ProductDashBoardComponent
  },
  {
    path:"rxjs",
    component:RxjsComponent
  }
  ,
  {
    path:"getAll",
    component:GetAllPostEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
