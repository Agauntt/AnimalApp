import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css']
})
export class DeleteAnimalComponent {

  animal:Animal;
  id:number;

  constructor(private animalService: AnimalService, private router:Router) {
    this.animal = new Animal();
   }

   deleteAnimal(){
     this.animalService.deleteAnimal(this.id).subscribe(data => this.gotoAnimalList())
   }

   gotoAnimalList(){
     this.router.navigate(['/animals']);
   }


}
