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

public class UserController {
	@Autowired
	UserService userService;

	@PostMapping("/register")
	@CrossOrigin(origins = { "${settings.cors_origin}" })
	public UserResponse addUser(@RequestBody User user) {
		UserResponse response = userService.addUser(user);
		return response;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = { "${settings.cors_origin}" })
	public UserResponse login(@RequestBody User user) {
		UserResponse response = userService.checkLogin(user);
		return response;
	}

}
