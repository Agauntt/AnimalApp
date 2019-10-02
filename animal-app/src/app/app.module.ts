import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FindAnimalComponent } from './find-animal/find-animal.component';
import { DeleteAnimalComponent } from './delete-animal/delete-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';

const routes: Routes=[
  {path: 'animals', component: AnimalListComponent},
  {path: 'createAnimal', component: CreateAnimalComponent},
  {path: 'findAnimal', component: FindAnimalComponent},
  {path: 'updateAnimal', component: UpdateAnimalComponent},
  {path: 'deleteAnimal', component: DeleteAnimalComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    CreateAnimalComponent,
    FindAnimalComponent,
    DeleteAnimalComponent,
    UpdateAnimalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
