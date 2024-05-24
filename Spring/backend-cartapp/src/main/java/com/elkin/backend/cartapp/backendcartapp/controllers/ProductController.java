package com.elkin.backend.cartapp.backendcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.elkin.backend.cartapp.backendcartapp.models.entities.Product;
import com.elkin.backend.cartapp.backendcartapp.services.ProductService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController //Controller se utiliza para trabajar con MVC (Vistas integradas en la aplicación de Spring. ej: tymelief)
//@RequestMapping("/api") //Configura una ruta base o primaria
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products") // Usamos GetMapping ya que es una petición o request del tpo o metodo get para leer o recuperar datos
    public List<Product> list() {
        return service.findAll();
    }
}
