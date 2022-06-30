import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSeccionComponent } from './home-seccion/home-seccion.component';
import { GifsSeccionComponent } from './gifs-seccion/gifs-seccion.component';
import { StikerSeccionComponent } from './stiker-seccion/stiker-seccion.component';

const routes: Routes = [
  {path:"",component:HomeSeccionComponent},
  {path:"gifs",component:GifsSeccionComponent},
  {path:"stikers",component:StikerSeccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
