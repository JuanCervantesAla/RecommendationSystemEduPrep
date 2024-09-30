package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

@Entity
public class StudentCourseGrade {

    @EmbeddedId
    private StudentCourseGradeKey studentCourseGradeKey;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "studentId", referencedColumnName = "studentId")
    private User student;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "courseId", referencedColumnName = "courseId")
    private Course course;

    private float grade;

    // Getters y Setters

    public StudentCourseGradeKey getStudentCourseGradeKey() {
        return studentCourseGradeKey;
    }

    public void setStudentCourseGradeKey(StudentCourseGradeKey studentCourseGradeKey) {
        this.studentCourseGradeKey = studentCourseGradeKey;
    }

    public User getStudent() {
        return student;
    }

    public void setStudent(User student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public float getGrade() {
        return grade;
    }

    public void setGrade(float grade) {
        this.grade = grade;
    }
}
