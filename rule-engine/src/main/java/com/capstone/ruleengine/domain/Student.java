package com.capstone.ruleengine.domain;

import java.io.Serializable;

public class Student implements Serializable {

	private static final long serialVersionUID = 1L;

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

	private Double languageTestScore;

	private String levelOfEducation;

	private String fieldOfStudy;

	private Double gpa;

    private Long familyIncome;
    
    private int totalEducation;
    
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

	public Double getLanguageTestScore() {
		return languageTestScore;
	}

	public void setLanguageTestScore(Double languageTestScore) {
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

	public Double getGpa() {
		return gpa;
	}

	public void setGpa(Double gpa) {
		this.gpa = gpa;
	}

	public Long getFamilyIncome() {
		return familyIncome;
	}

	public void setFamilyIncome(Long familyIncome) {
		this.familyIncome = familyIncome;
	}

	public int getTotalEducation() {
		return totalEducation;
	}

	public void setTotalEducation(int totalEducation) {
		this.totalEducation = totalEducation;
	}


}
