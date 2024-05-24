package com.elkin.backend.cartapp.backendcartapp.services;
import java.util.List;

import com.elkin.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
