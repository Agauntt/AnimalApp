import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-find-animal',
  templateUrl: './find-animal.component.html',
  styleUrls: ['./find-animal.component.css']
})
export class FindAnimalComponent {

  id:number;
  animal:Animal;

  constructor(private animalService: AnimalService) {
   }

   findAnimal(){
    this.animalService.findById(this.id).subscribe(data => {
      console.log(data)
      this.animal = data;
    })
   }
}
