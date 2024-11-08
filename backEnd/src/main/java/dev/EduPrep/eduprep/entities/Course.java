package dev.EduPrep.eduprep.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
public class Course {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;

    private String name;
    private String textintroduction;
    private Integer timedurationmonth;
    private boolean isWorkshop;
    private Integer difficult;
    private Integer howManyLesson;
    private String category;

    /////////////////JPA ANNOTATIONS
    @JsonIgnore
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<StudentCourseGrade> grades = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Lesson> lessons;


    /**********Constructor****************/
    public Course(){}


    /***********************Getter and Setter***************/
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTextintroduction() {
        return textintroduction;
    }

    public void setTextintroduction(String textintroduction) {
        this.textintroduction = textintroduction;
    }

    public boolean getIsWorkshop() {
        return isWorkshop;
    }

    public void setIsWorkshop(boolean workshop) {
        isWorkshop = workshop;
    }

    public Integer getTimedurationmonth() {
        return timedurationmonth;
    }

    public void setTimedurationmonth(Integer timedurationmonth) {
        this.timedurationmonth = timedurationmonth;
    }

    public Integer getDifficult() {
        return difficult;
    }

    public void setDifficult(Integer difficult) {
        this.difficult = difficult;
    }

    public Collection<StudentCourseGrade> getGrades() {
        return grades;
    }

    public void setGrades(Collection<StudentCourseGrade> grades) {
        this.grades = grades;
    }

    public boolean isWorkshop() {
        return isWorkshop;
    }

    public void setWorkshop(boolean workshop) {
        isWorkshop = workshop;
    }

    public List<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(List<Lesson> lessons) {
        this.lessons = lessons;
    }

    public Integer getHowManyLesson() {
        return howManyLesson;
    }

    public void setHowManyLesson(Integer howManyLesson) {
        this.howManyLesson = howManyLesson;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
