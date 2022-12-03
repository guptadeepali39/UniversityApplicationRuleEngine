package com.capstone.ruleengine.controller;

import java.net.URISyntaxException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ruleengine.domain.Student;
import com.capstone.ruleengine.dto.EligibilityDTO;
import com.capstone.ruleengine.service.AdmissionVerificationService;

@RestController
@RequestMapping("/api")
public class AdmissionVerificationController {

	@Autowired
	AdmissionVerificationService admissionVerificationService;
	private final Logger log = LoggerFactory.getLogger(AdmissionVerificationController.class);

	@PostMapping("/eligibility")
	@CrossOrigin(origins = { "${settings.cors_origin}" })
	public ResponseEntity<EligibilityDTO> getEligibility(@RequestBody Student student) throws URISyntaxException {
		log.debug("REST request to save student : {}", student);
		EligibilityDTO eligibilityDTO = new EligibilityDTO();
		eligibilityDTO.setResult("Eligible");
		eligibilityDTO.setMessage("Congratulations you are eligible to apply.");
		eligibilityDTO.setStudent(student);
		log.debug("Checking eligibility with {}", student);
		admissionVerificationService.suggestDynamicEligibility(student, eligibilityDTO);
		log.info("Checked eligibility {}", eligibilityDTO.getResult());
		return ResponseEntity.ok().body(eligibilityDTO);
	}

}
