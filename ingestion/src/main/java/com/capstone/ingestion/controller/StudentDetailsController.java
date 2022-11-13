package com.capstone.ingestion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ingestion.domain.StudentDetails;
import com.capstone.ingestion.service.StudentDetailsService;

import dto.UserResponse;

@RestController
@RequestMapping("/api")
public class StudentDetailsController {

	@Autowired
	StudentDetailsService studentDetailsService;

	@PostMapping("/addUpdateDetails")
	public UserResponse saveDetails(@RequestBody StudentDetails studentDetails) {
		UserResponse response = studentDetailsService.addUpdateDetails(studentDetails);
		return response;
	}
	
}
