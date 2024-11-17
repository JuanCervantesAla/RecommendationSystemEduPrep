package dev.EduPrep.eduprep.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Question {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer questionId;

    private String question;
    private String correctAnswer;

    @ElementCollection
    private List<String> options;

    ///////////////////JPA RELATIONS
    @ManyToOne//To make each question linked to the exam
    @JoinColumn(name = "examId", nullable = false)
    @JsonIgnore
    private Exam exam;


    /**********Constructor****************/
    public Question(){}
    public Question(String question, List<String> options, String correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }


    /***********************Getter and Setter***************/
    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String answer) {
        this.correctAnswer = answer;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }
}
