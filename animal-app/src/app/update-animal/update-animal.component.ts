import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent {

  animal:Animal;

  constructor(private animalService: AnimalService, private router:Router) {
    this.animal = new Animal();
   }

   updateAnimal(){
     this.animalService.updateAnimal(this.animal).subscribe(data => this.gotoAnimalList())
   }

   gotoAnimalList(){
     this.router.navigate(['/animals']);
   }

}
