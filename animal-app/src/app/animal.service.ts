import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal'


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private createUrl: string;
  private getAnimalsUrl: string;
  private getByIdUrl: string;
  private deleteAnimalUrl: string;
  private updateAnimalUrl: string;

  constructor(private http:HttpClient) {

    this.createUrl = "http://localhost:5005/createAnimal"
    this.getAnimalsUrl = "http://localhost:5005/animals"
    this.getByIdUrl = "http://localhost:5005/animal/"
    this.deleteAnimalUrl = "http://localhost:5005/animal/"
    this.updateAnimalUrl = "http://localhost:5005/updateAnimal/"
   }

   public getAllAnimals(): Observable<Animal[]>{
     return this.http.get<Animal[]>(this.getAnimalsUrl);
   }

   public createAnimal(animal:Animal){
    return this.http.post<Animal>(this.createUrl, animal);
   }

   public findById(id){
     return this.http.get<Animal>(this.getByIdUrl+id);
   }

   public deleteAnimal(id){
     return this.http.delete<Animal>(this.deleteAnimalUrl+id);
   }

   public updateAnimal(animal:Animal) {
     return this.http.put<Animal>(this.updateAnimalUrl, animal)
   }
}
