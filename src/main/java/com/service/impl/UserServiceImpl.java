package com.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.domain.UserDemo;
import com.repository.UserRepositoryDemo;
import com.service.dto.UserDemo1;
import com.service.serviceInterface.UserServiceDemo;

@Service
public class UserServiceImpl implements UserServiceDemo{

	//@Autowired
    private final UserRepositoryDemo repository;

	public UserServiceImpl(UserRepositoryDemo repository){
		this.repository = repository;
	}
	
	@Override
    public UserDemo create(UserDemo1 user) {
        return repository.save(user);
    }
	
	/*@Override
    public UserDemo delete(Long id) {
    	UserDemo user = findById(id);
        if(user != null){
            repository.delete(user);
        }
        return user;
    }
	
	@Override
    public UserDemo findById(Long id) {
        return repository.findOne(id);
    }*/
	
    /*

    */

    @Override
    public List findAll() {
        return repository.findAll();
    }

    /*

    @Override
    public UserDemo update(UserDemo user) {
        return null;
    }*/

}
