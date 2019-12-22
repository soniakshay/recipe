import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoaderComponent } from './loader/loader.component';
import { AgGridModule } from 'ag-grid-angular';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipeComponent,
    LoaderComponent,
    RecipeDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([AppComponent,RecipeDataComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
