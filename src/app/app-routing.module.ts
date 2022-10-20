import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRecipeComponent } from './components/home-recipe/home-recipe.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
