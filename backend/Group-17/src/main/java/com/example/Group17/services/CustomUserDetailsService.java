// package com.example.Group17.services;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import com.example.Group17.model.Users;
// import com.example.Group17.repository.UserRepository;

// @Service
// public class CustomUserDetailsService implements UserDetailsService {

//     @Autowired
//     private UserRepository userRepository;

//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

//         Users user = userRepository.findByUsername(username);
//         if(user ==null) {
//             throw new UsernameNotFoundException("User Not Found");
//         }
//         return new CustomUserDetails(user);
//     }
// }
