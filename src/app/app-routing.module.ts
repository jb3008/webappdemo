import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { UserEditComponent } from './user-edit/user-edit.component'
const routes: Routes =[
 
{
path: '',
component:UsersComponent,

},
{
  path: 'user-edit',
  component:UserEditComponent,
  
  },
{
   path: '**',
   redirectTo: 'users'
 } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
