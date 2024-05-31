package com.elkin.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elkin.backend.usersapp.backendusersapp.models.entities.User;
import com.elkin.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public void delete(Long Id) {
        userRepository.deleteById(Id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long Id) {
        return userRepository.findById(Id);
    }

    @Override
    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public Optional<User> update(User user, Long Id) {
        Optional<User> userOptional = this.findById(Id);
        if(userOptional.isPresent())
        {
            User userToUpdate = userOptional.orElseThrow();
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setEmail(user.getEmail());
            return Optional.of(this.save(userToUpdate));
        }
        else
        {
            return Optional.ofNullable(null);
        }
    }
}
