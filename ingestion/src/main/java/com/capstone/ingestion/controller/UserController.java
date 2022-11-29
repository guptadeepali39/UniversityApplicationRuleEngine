package com.capstone.ingestion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ingestion.domain.User;
import com.capstone.ingestion.service.UserService;

import dto.UserResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "${settings.cors_origin}" })
public class UserController {
	@Autowired
	UserService userService;

	@PostMapping("/signUp")
	public UserResponse addUser(@RequestBody User user) {
		UserResponse response = userService.addUser(user);
		return response;
	}
	
	@PostMapping("/login")
	public UserResponse login(@RequestBody User user) {
		UserResponse response = userService.checkLogin(user);
		return response;
	}

}
