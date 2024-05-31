package com.elkin.backend.usersapp.backendusersapp.controllers;


import com.elkin.backend.usersapp.backendusersapp.models.entities.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elkin.backend.usersapp.backendusersapp.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> list(){
        return userService.findAll();
    }

    //Una forma
    // @GetMapping("/{id}")
    // public User show(@PathVariable Long id){
    //     return userService.findById(id).orElseThrow();
    // }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<User> userOptional = userService.findById(id);

        if(userOptional.isPresent())
        {
            return ResponseEntity.ok(userOptional.orElseThrow());
        }
        else
        {
            return ResponseEntity.notFound().build(); //404
        }
    }

    // Una forma
    // @PostMapping
    // @ResponseStatus(HttpStatus.CREATED)
    // public User create(@RequestBody User user){
    //     return userService.save(user);
    // }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody User user)
    {
        Optional<User> userOptional = userService.update(user, id);
        if(userOptional.isPresent())
        {
            return ResponseEntity.status(HttpStatus.CREATED).body(userOptional.orElseThrow());
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id)
    {
        Optional<User> userOptional = userService.findById(id);
        if(userOptional.isPresent())
        {
            userService.delete(id);
            return ResponseEntity.noContent().build(); //204
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
}
