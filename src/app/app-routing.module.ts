import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from '../app/add-profile/add-profile.component';
import { GetProfileComponent } from './get-profile/get-profile.component';

const routes: Routes = [
  {path: '', component: AddProfileComponent},
  {path: 'get/:id', component: GetProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
