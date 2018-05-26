package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.domain.UserDemo;
import com.service.dto.UserDemo1;


public interface UserRepositoryDemo extends JpaRepository<UserDemo, String>{
	 List findAll();
	 UserDemo save(UserDemo1 user);
	 /*UserDemo findOne(Long id);
	void delete(UserDemo user);*/

   

    

    
}
