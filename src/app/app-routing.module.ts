import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardFotoComponent } from './card-foto/card-foto.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'card', component: CardFotoComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
