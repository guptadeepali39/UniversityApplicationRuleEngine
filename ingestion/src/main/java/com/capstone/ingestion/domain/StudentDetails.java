package com.capstone.ingestion.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_details")
public class StudentDetails {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long userId;
	
	private String firstName;
	
	private String lastName;
	
	private String studentType;
	
	private String gender;
	
	private String languageTest;
	
	private Long languageTestScore;
	
	private String levelOfEducation;
	
	private String fieldOfStudy;
	
	private Long gpa;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getStudentType() {
		return studentType;
	}

	public void setStudentType(String studentType) {
		this.studentType = studentType;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLanguageTest() {
		return languageTest;
	}

	public void setLanguageTest(String languageTest) {
		this.languageTest = languageTest;
	}

	public Long getLanguageTestScore() {
		return languageTestScore;
	}

	public void setLanguageTestScore(Long languageTestScore) {
		this.languageTestScore = languageTestScore;
	}

	public String getLevelOfEducation() {
		return levelOfEducation;
	}

	public void setLevelOfEducation(String levelOfEducation) {
		this.levelOfEducation = levelOfEducation;
	}

	public String getFieldOfStudy() {
		return fieldOfStudy;
	}

	public void setFieldOfStudy(String fieldOfStudy) {
		this.fieldOfStudy = fieldOfStudy;
	}

	public Long getGpa() {
		return gpa;
	}

	public void setGpa(Long gpa) {
		this.gpa = gpa;
	}

}
