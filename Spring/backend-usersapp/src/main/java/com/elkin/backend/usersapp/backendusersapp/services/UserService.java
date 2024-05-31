package com.elkin.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.elkin.backend.usersapp.backendusersapp.models.entities.User;

public interface UserService {
    List<User> findAll();
    Optional<User> findById(Long Id);
    User save(User user);
    Optional<User> update(User user, Long Id);
    void delete(Long Id);
}
