import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  {
    path:'characters', component: CharactersComponent
  },
  {
    path:'**', pathMatch: 'full', redirectTo:"characters"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
