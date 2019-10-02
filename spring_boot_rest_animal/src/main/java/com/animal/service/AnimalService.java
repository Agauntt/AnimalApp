package com.animal.service;

import com.animal.model.Animal;

import java.util.List;

public interface AnimalService {
	
	public Animal createAnimal(Animal animal);
	public Animal getAnimalById(int id);
	public List<Animal> getAllAnimals();
	public Animal updateAnimal(Animal animal);
	public void deleteAnimal(int id);
	public List<Animal> findByName(String name);
}
