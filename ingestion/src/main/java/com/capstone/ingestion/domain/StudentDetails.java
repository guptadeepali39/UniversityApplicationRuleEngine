package com.capstone.ingestion.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_details")
public class StudentDetails {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long userId;

	private String firstName;

	private String lastName;

	private String address1;

	private String address2;

	private String pincode;

	private String country;

	private String previousFieldOfStudy;

	private String isLanguageTest;

	private String languageTestType;

	private Long relevantExperince;

	private String course;

	private String studentType;

	private String gender;

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

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPreviousFieldOfStudy() {
		return previousFieldOfStudy;
	}

	public void setPreviousFieldOfStudy(String previousFieldOfStudy) {
		this.previousFieldOfStudy = previousFieldOfStudy;
	}

	public String getIsLanguageTest() {
		return isLanguageTest;
	}

	public void setIsLanguageTest(String isLanguageTest) {
		this.isLanguageTest = isLanguageTest;
	}

	public String getLanguageTestType() {
		return languageTestType;
	}

	public void setLanguageTestType(String languageTestType) {
		this.languageTestType = languageTestType;
	}

	public Long getRelevantExperince() {
		return relevantExperince;
	}

	public void setRelevantExperince(Long relevantExperince) {
		this.relevantExperince = relevantExperince;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

}
