package com.capstone.ruleengine.dto;

import com.capstone.ruleengine.domain.Student;

public class EligibilityDTO {

	private Student student;
	private String result;
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
}
