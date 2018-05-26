package com.service.serviceInterface;

import java.util.List;

import com.domain.UserDemo;
import com.service.dto.UserDemo1;

public interface UserServiceDemo {
	
	public UserDemo create(UserDemo1 UserDemo);
	/*public UserDemo delete(Long id);
	public UserDemo findById(Long id);*/
	/*
	*/
	public List findAll();
	/*
	public UserDemo update(UserDemo UserDemo);*/
}
