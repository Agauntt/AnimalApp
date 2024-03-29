package com.animal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.animal.dao.AnimalDAO;
import com.animal.model.Animal;
import com.animal.service.AnimalService;

@Service
public class AnimalServiceImpl implements AnimalService{

	@Autowired
	private AnimalDAO dao;
	@Override
	public Animal createAnimal(Animal animal) {
		// TODO Auto-generated method stub
		return dao.save(animal);
	}

	@Override
	public Animal getAnimalById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).get();
	}

	@Override
	public List<Animal> getAllAnimals() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Animal updateAnimal(Animal animal) {
		// TODO Auto-generated method stub
		return dao.save(animal);
	}

	@Override
	public void deleteAnimal(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public List<Animal> findByName(String name) {
		return dao.findByNameContaining(name);
	}

}
