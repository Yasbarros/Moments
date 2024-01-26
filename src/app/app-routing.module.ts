import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/page/about/about.component';
import { HomeComponent } from './components/page/home/home.component';
import { NewMomentsComponent } from './components/page/new-moments/new-moments.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: '', component:HomeComponent},
  {path: 'momentsNew', component:NewMomentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
