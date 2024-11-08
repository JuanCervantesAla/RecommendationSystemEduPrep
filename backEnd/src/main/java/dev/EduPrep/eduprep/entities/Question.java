package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

@Entity
public class Question {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer questionId;

    private String question;
    private String answer;

    ///////////////////JPA RELATIONS
    @ManyToOne//To make each question linked to the exam
    @JoinColumn(name = "examId", nullable = false)
    private Exam exam;


    /**********Constructor****************/
    public Question(){}
    public Question(String question_, String answer_){
        this.question=question_;
        this.answer = answer_;
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

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }
}
