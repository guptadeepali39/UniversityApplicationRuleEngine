package com.capstone.ingestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.ingestion.domain.StudentDetails;

public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Integer> {
	
	StudentDetails findDetailsByUserId(Long id);

}
