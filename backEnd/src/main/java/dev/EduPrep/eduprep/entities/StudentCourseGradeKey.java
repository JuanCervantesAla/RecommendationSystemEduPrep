package dev.EduPrep.eduprep.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class StudentCourseGradeKey implements Serializable {

    @Column(name = "studentId")
    private Integer studentId;

    @Column(name = "courseId")
    private Integer courseId;

    public StudentCourseGradeKey(){}

    public StudentCourseGradeKey(Integer studentId, Integer courseId) {
        this.studentId = studentId;
        this.courseId = courseId;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentCourseGradeKey that = (StudentCourseGradeKey) o;
        return Objects.equals(studentId, that.studentId) && Objects.equals(courseId, that.courseId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId, courseId);
    }
}
