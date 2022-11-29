package com.capstone.ingestion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.capstone.ingestion.domain.StudentDetails;
import com.capstone.ingestion.repository.StudentDetailsRepository;

import dto.StudentDetailsResponse;
import dto.UserResponse;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StudentDetailsService {

	@Autowired
	StudentDetailsRepository studentDetailsRepository;

	public UserResponse addUpdateDetails(@RequestBody StudentDetails details) {
		UserResponse resp = new UserResponse();
		try {
			studentDetailsRepository.save(details);

			resp.setMessage("Details saved successfully.");
			resp.setStatus("Success");
			resp.setStatusCode("S101");

			log.info("Student details saved successfully.");
		} catch (Exception ex) {
			resp.setMessage("Internal server error.");
			resp.setStatus("Failed");
			resp.setStatusCode("E101");

			log.info("Error occurred while saving student details." + ex);

		}
		return resp;
	}

	public StudentDetailsResponse getDetails(@RequestBody Long id) {
		StudentDetailsResponse resp = new StudentDetailsResponse();
		try {
			StudentDetails exitsingDetails = studentDetailsRepository.findDetailsByUserId(id);

			resp.setMessage("Details reterived.");
			resp.setStatus("Success");
			resp.setStatusCode("S101");
			resp.setStudentDetails(exitsingDetails);

			log.info("Student details saved successfully.");
		} catch (Exception ex) {
			resp.setMessage("Internal server error.");
			resp.setStatus("Failed");
			resp.setStatusCode("E101");

			log.info("Error occurred while saving student details." + ex);

		}
		return resp;
	}

}
