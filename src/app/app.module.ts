import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-import';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header-recipe/header.component';
import { CreateRecipesComponent } from './components/create-recipes/create-recipes.component';
import { TableRecipesComponent } from './components/table-recipes/table-recipes.component';
import { ConfirmAlertComponent } from './components/dialog/confirm-alert/confirm-alert.component';
import { PreviewRecipesComponent } from './components/dialog/preview-recipes/preview-recipes.component';
import { HomeRecipeComponent } from './components/home-recipe/home-recipe.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateRecipesComponent,
    TableRecipesComponent,
    ConfirmAlertComponent,
    PreviewRecipesComponent,
    HomeRecipeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
