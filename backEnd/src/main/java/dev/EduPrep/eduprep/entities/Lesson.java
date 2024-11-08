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
    private String description;
    private String videoUrl;


    ////////////////JPA RELATIONS

    @JsonIgnore
    @OneToMany(mappedBy = "lesson", cascade = CascadeType.ALL)
    private Collection<StudentLessonGrade> lessonGrade = new ArrayList<>();


    @ManyToOne//Many to one make it each lesson part of a course
    @JoinColumn(name = "courseId", nullable = false)
    private Course course;

    @OneToMany(mappedBy = "lesson", cascade = CascadeType.ALL, orphanRemoval = true)//Each lesson will have an indeterminated number of sections
    private List<Section> sections;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "examId", referencedColumnName = "examId")
    private Exam exam;



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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public Collection<StudentLessonGrade> getLessonGrade() {
        return lessonGrade;
    }

    public void setLessonGrade(Collection<StudentLessonGrade> lessonGrade) {
        this.lessonGrade = lessonGrade;
    }
}
