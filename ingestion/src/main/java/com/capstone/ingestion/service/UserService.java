package com.capstone.ingestion.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.ingestion.domain.User;
import com.capstone.ingestion.repository.UserRepository;

import dto.UserResponse;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public UserResponse addUser(User user) {
		UserResponse resp = new UserResponse();
		User existingUser = getUser(user.getEmailId());
		if (existingUser == null) {
			String encodedPassword = convertToBase64(user.getPassword());
			user.setPassword(encodedPassword);
			userRepository.save(user);

			resp.setMessage("User created successfully");
			resp.setStatus("success");
			resp.setStatusCode("S101");
		} else {
			resp.setMessage("Email id is already registered");
			resp.setStatus("Success");
			resp.setStatusCode("E101");
		}
		return resp;

	}

	public User getUser(String emailId) {
		Optional<User> existingUser = userRepository.findByEmailId(emailId);
		if (existingUser.isPresent()) {
			return existingUser.get();
		}
		return null;
	}

	public UserResponse checkLogin(User user) {
		UserResponse userResponse = new UserResponse();
		String encodedPassword = convertToBase64(user.getPassword());
		Optional<User> existingUser = userRepository.findByEmailId(user.getEmailId());
		if(existingUser.isPresent())
		{
			existingUser = userRepository.findByEmailIdAndPassword(user.getEmailId(), encodedPassword);
			if (existingUser.isPresent()) {
				userResponse.setMessage("Log in successful");
				userResponse.setStatus("Success");
				userResponse.setStatusCode("S101");
				return userResponse;
			}
			else {
				userResponse.setMessage("Invalid credentials.");
				userResponse.setStatus("Success");
				userResponse.setStatusCode("E101");
			}
		}
		else
		{
			userResponse.setMessage("No user found.");
			userResponse.setStatus("Success");
			userResponse.setStatusCode("E101");
			return userResponse;
		}
		
		
		return userResponse;

	}

	private String convertToBase64(String password) {
		return Base64.getEncoder().encodeToString(password.getBytes());
	}

}
