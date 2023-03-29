package com.example.Group17.services;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Group17.repository.UserRepository;
import com.example.Group17.model.Users;

@Service
public class UserService {
    Integer userID;

    @Autowired
    UserRepository userRepository;

    // public List<Users> getUsers() {
    //     return (List<Users>) userRepository.findAll();
    // }
    // public Users saveDetails(Users user){
    //     return userRepository.save(user);
    // }
    // public Users getUserDetailsById(Long id) {
    //     return userRepository.findById(id).orElse(null);
    // }

    public Users getUserById(Integer userID) {
        return userRepository.findByUserID(userID);
    }

    public Users updateUser(Integer userID, Users updatedUser) {
        Users user = userRepository.findByUserID(userID);
        if (user != null) {
            user.setFirst_name(updatedUser.getFirst_name());
            user.setLast_name(updatedUser.getLast_name());
            user.setEmail_address(updatedUser.getEmail_address());
            user.setPhone_number(updatedUser.getPhone_number());
            user.setBio(updatedUser.getBio());
            return userRepository.save(user);
        }
        return null;
    }

    public Users getUserByCredentials(String username, String userpassword) {
        return userRepository.findByUsernameAndUserpassword(username, userpassword);
    }

     public Users saveUser(Users users) {
        return userRepository.save(users);
    }

}
