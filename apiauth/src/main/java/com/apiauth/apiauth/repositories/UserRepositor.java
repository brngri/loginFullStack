package com.apiauth.apiauth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiauth.apiauth.domain.user.User;

public interface UserRepositor extends JpaRepository<User, String> {
    
}
