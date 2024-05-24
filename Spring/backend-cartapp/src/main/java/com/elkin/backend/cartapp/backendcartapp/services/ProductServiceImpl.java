package com.elkin.backend.cartapp.backendcartapp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elkin.backend.cartapp.backendcartapp.models.entities.Product;
import com.elkin.backend.cartapp.backendcartapp.repositories.ProductRepository;

@Service //Aqui va la logica de negocio
public class ProductServiceImpl implements ProductService {

    @Autowired //Inyección de dependencias
    private ProductRepository repository;

    @Override
    @Transactional(readOnly = true) //Todos los metodos que sen consultas deben llevar el transactional solamente de lectura
    public List<Product> findAll() {
        return (List<Product>)repository.findAll();
    }

}
