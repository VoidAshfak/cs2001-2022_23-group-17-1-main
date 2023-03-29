package com.example.Group17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group17.model.Users;
import com.example.Group17.repository.UserRepository;
import com.example.Group17.services.UserService;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

@Autowired
private UserService userService;
@Autowired
private UserRepository userRepository;

@PostMapping("/register")
public ResponseEntity<Users> login(@RequestBody Users users) {
    Users savedUser = userRepository.save(users);
    return ResponseEntity.ok(savedUser);
}

 @GetMapping("/users")
  public Users getUserByCredentials(@RequestParam("username") String username, @RequestParam("userpassword") String userpassword) {
    return userService.getUserByCredentials(username, userpassword);
  }

@GetMapping("/users/{id}")
public Users getUserById(@PathVariable("id") Integer id) {
return userService.getUserById(id);
}

@PutMapping("/users/{id}")
public Users updateUser(@PathVariable("id") Integer id, @RequestBody Users updatedUser) {
    return userService.updateUser(id, updatedUser);
}

}

