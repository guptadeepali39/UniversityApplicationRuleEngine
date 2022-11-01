package com.capstone.ruleengine.service;

import java.io.File;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.capstone.ruleengine.config.DroolsEngineConfiguration;
import com.capstone.ruleengine.domain.Student;
import com.capstone.ruleengine.dto.EligibilityDTO;

@Component
public class AdmissionVerificationService {

	@Autowired
	KieContainer kieContainer;

	//@Autowired
	//KieContainer kieContainer2;

	@Autowired
	DroolsEngineConfiguration droolsEngineConfiguration;

	@Value("${config-file-path}")
	private String configFilePath;

	private final Logger log = LoggerFactory.getLogger(AdmissionVerificationService.class);

	public EligibilityDTO suggestDynamicEligibility(Student student, EligibilityDTO eligibilityDTO) {
		String filePath = configFilePath.concat(File.separator).concat("admissionVerification").concat(".drl");
		KieSession kieSession = droolsEngineConfiguration.getKieContainer(filePath).newKieSession();
		kieSession.insert(student);
		kieSession.setGlobal("log", log);
		//kieSession.setGlobal("eligibilityDto", eligibilityDTO);
		kieSession.fireAllRules();
		return eligibilityDTO;

	}
}
