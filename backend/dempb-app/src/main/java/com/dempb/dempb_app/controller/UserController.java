package com.dempb.dempb_app.controller;

import com.dempb.dempb_app.exception.UserNotFoundException;
import com.dempb.dempb_app.model.User;
import com.dempb.dempb_app.repository.UserReporsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin ("http://localhost:3000")
public class UserController {

    @Autowired
    private UserReporsitory userRepo;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/getUser")
    List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/user/{id}")
    User getIndividualUser(@PathVariable Long id) throws UserNotFoundException {
        return userRepo.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User putUser(@RequestBody User newUser, @PathVariable Long id) throws UserNotFoundException {
        return userRepo.findById(id)
                .map(user -> {
                    user.setEmail(newUser.getEmail());
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    return userRepo.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        userRepo.deleteById(id);
        return ("User deleted with id" + id);
    }
}
