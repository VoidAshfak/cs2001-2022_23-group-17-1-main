package com.example.Group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Group17.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long>{
    Users findByUsernameAndUserpassword(String username, String userpassword);

    Users findByUserID(Integer userID);
}
