import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './main/login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './main/signup/signup.component';

const routes: Routes = [
  {
    path: '',component:MainComponent,
    children:[
      {
      path:'login',component:LoginComponent
      },
      {
        path:'signup',component:SignupComponent
        }
    ]
    
},
{
  path: 'admin',component:AdminComponent,
  children: [
    {
      path:'products',component:ProductsComponent
    },
    {
      path:'products/:id/edit',component:ProductEditComponent
    },
    {
      path:'products/create',component:ProductCreateComponent
    },
  

  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
