package com.animal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Indexed;

@Entity
@Table
@Indexed
public class Animal {
	@Id
	@GeneratedValue
	private int id;
	@Column
	private String name;
	private int age;
	private String catagory;
	
	public Animal() {
		// TODO Auto-generated constructor stub
	}

	public Animal(int id, String name, int age, String catagory) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.catagory = catagory;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", name=" + name + ", age=" + age + ", catagory=" + catagory + "]";
	}
}
