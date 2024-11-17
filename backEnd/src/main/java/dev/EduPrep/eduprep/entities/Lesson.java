package dev.EduPrep.eduprep.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/*
    @Author: Cervantes Juan
 */
@Entity
public class Lesson {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer lessonId;

    private String title;
    @Column(length = 800)
    private String content;


    ////////////////JPA RELATIONS

    @JsonIgnore
    @OneToMany(mappedBy = "lesson", cascade = CascadeType.ALL)
    private Collection<StudentLessonGrade> lessonGrade = new ArrayList<>();


    @ManyToOne//Many to one make it each lesson part of a course
    @JoinColumn(name = "courseId", nullable = false)
    @JsonIgnore
    private Course course;

    /**********Constructor****************/
    public Lesson(){
    }


    /***********************Getter and Setter***************/
    public Integer getLessonId() {
        return lessonId;
    }

    public void setLessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Collection<StudentLessonGrade> getLessonGrade() {
        return lessonGrade;
    }

    public void setLessonGrade(Collection<StudentLessonGrade> lessonGrade) {
        this.lessonGrade = lessonGrade;
    }
}
