import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NuestroclientesComponent } from './components/nuestroclientes/nuestroclientes.component';

const routes: Routes = [

  {path:'nuestroclientes',component:NuestroclientesComponent},
  {path:'menu',component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
