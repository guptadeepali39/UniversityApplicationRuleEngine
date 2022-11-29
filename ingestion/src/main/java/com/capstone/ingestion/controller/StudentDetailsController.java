package com.capstone.ingestion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ingestion.domain.StudentDetails;
import com.capstone.ingestion.service.StudentDetailsService;

import dto.StudentDetailsResponse;
import dto.UserResponse;

@RestController
@RequestMapping("/api")
public class StudentDetailsController {

	@Autowired
	StudentDetailsService studentDetailsService;

	@PostMapping("/addUpdateDetails")
	@CrossOrigin(origins = { "${settings.cors_origin}" })
	public UserResponse saveDetails(@RequestBody StudentDetails studentDetails) {
		UserResponse response = studentDetailsService.addUpdateDetails(studentDetails);
		return response;
	}

	@GetMapping("/getUserDetails/{id}")
	@CrossOrigin(origins = { "${settings.cors_origin}" })
	public StudentDetailsResponse getDetails(@PathVariable(value = "id") long id) {
		StudentDetailsResponse response = studentDetailsService.getDetails(id);
		return response;
	}

}
