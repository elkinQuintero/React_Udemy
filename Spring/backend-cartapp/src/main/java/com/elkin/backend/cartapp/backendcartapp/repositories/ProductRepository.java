package com.elkin.backend.cartapp.backendcartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.elkin.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{

}
