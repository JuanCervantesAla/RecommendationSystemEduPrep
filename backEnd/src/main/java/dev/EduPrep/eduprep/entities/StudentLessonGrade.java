package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

@Entity
public class StudentLessonGrade {
    @EmbeddedId
    private StudentLessonGradeKey studentLessonGradeKey;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "studentId", referencedColumnName = "studentId")
    private User student;

    @ManyToOne
    @MapsId("lessonId")
    @JoinColumn(name = "lessonId", referencedColumnName = "lessonId")
    private Lesson lesson;

    private float grade;


    public StudentLessonGrade(){}

    public StudentLessonGradeKey getStudentLessonGradeKey() {
        return studentLessonGradeKey;
    }

    public void setStudentLessonGradeKey(StudentLessonGradeKey studentLessonGradeKey) {
        this.studentLessonGradeKey = studentLessonGradeKey;
    }

    public User getStudent() {
        return student;
    }

    public void setStudent(User student) {
        this.student = student;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public float getGrade() {
        return grade;
    }

    public void setGrade(float grade) {
        this.grade = grade;
    }
}
