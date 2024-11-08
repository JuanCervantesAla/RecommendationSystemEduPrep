package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Exam {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer examId;

    /////////////JPA RELATIONS
    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;

    @OneToOne(mappedBy = "exam")
    private Lesson lesson;


    /**********Constructor****************/
    public Exam(){}


    /***********************Getter and Setter***************/
    public Integer getExamId() {
        return examId;
    }

    public void setExamId(Integer examId) {
        this.examId = examId;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
