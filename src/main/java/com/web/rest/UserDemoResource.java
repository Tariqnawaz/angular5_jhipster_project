package com.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.domain.UserDemo;
import com.service.dto.UserDemo1;
import com.service.serviceInterface.UserServiceDemo;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/user-demo")
public class UserDemoResource {

    //@Autowired
    private final UserServiceDemo userServiceDemo;

    public UserDemoResource(UserServiceDemo userServiceDemo){
    	this.userServiceDemo = userServiceDemo;
    }
    
    /*@RequestMapping(value = "/add", method = RequestMethod.POST)
    public void add(@RequestBody UserDemo1 user) {
        System.out.println("success");
    }*/
    
    @PostMapping("/add")
    public void create(@RequestBody UserDemo1 user){
        //return userServiceDemo.create(user);
    	 System.out.println("success");
    }
    
    /*@DeleteMapping(path ={"/delete/{id}"})
    public UserDemo delete(@PathVariable("id") Long id) {
        return userServiceDemo.delete(id);
    }*/
    
    /*@PostMapping
    public User create(@RequestBody User user){
        return userService.create(user);
    }

    @GetMapping(path = {"/{id}"})
    public User findOne(@PathVariable("id") int id){
        return userService.findById(id);
    }

    @PutMapping
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @DeleteMapping(path ={"/{id}"})
    public User delete(@PathVariable("id") int id) {
        return userService.delete(id);
    }*/

    @GetMapping("/userDetails")
    public List findAll(){
        return userServiceDemo.findAll();
    }
}