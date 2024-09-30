package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
public class Course {

    //Attributes
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;


    private String name;
    private String textintroduction;
    private Integer timedurationmonth;
    private boolean isWorkshop;
    private Integer difficult;



    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<StudentCourseGrade> grades = new ArrayList<>();


    ///Getter and setters
    public Course(){}


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

    public boolean isWorkshop() {
        return isWorkshop;
    }

    public void setWorkshop(boolean workshop) {
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
}
