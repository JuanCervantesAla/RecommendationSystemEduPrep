package dev.EduPrep.eduprep.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;
    private String name;
    private String text;
    @Column(length = 500)
    private String textintroduction;
    private Integer timedurationmonth;
    private boolean isWorkshop;
    private Integer difficult;
    private Integer howManyLesson;
    private String category;
    private String videoUrl;
    private String imageUrl;

    @JsonIgnore
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<StudentCourseGrade> grades = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Lesson> lessons;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "examId", referencedColumnName = "examId")
    private Exam exam;

    // Constructor sin inicialización de exam para evitar referencia circular
    public Course() {}


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

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
