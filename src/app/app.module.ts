import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-import';
import { HeaderComponent } from './header/header.component';
import { TableRecipesComponent } from './table-recipes/table-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmAlertComponent } from './dialog/confirm-alert/confirm-alert.component';
import { PreviewRecipesComponent } from './dialog/preview-recipes/preview-recipes.component';
import { CreateRecipesComponent } from './create-recipes/create-recipes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateRecipesComponent,
    TableRecipesComponent,
    ConfirmAlertComponent,
    PreviewRecipesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
