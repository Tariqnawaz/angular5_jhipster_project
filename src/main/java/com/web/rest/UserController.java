package com.web.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.repository.UserRepository;
import com.service.serviceInterface.UserServiceDemo;



@RestController
@RequestMapping("/api/user-demo1")
public class UserController {
	private final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserRepository  userService;

    /*@PostMapping
    public UserDemo create(@RequestBody UserDemo user){
        return userService.create(user);
    }

    
    public UserDemo findOne(@PathVariable("id") int id){
        //return userService.findById(id);
        return null;
    }

    @PutMapping("/addUserDetails")
    public UserDemo update(@RequestBody UserDemo user){
        return userService.update(user);
    }

    @DeleteMapping(path ={"/delete/{id}"})
    public UserDemo delete(@PathVariable("id") int id) {
        return userService.delete(id);
    }*/

    //@GetMapping("/userDetails")
    public List findAll(){
        return userService.findAll();
    }
}
