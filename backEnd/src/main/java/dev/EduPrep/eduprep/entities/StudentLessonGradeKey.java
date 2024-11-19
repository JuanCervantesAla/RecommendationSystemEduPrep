package dev.EduPrep.eduprep.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class StudentLessonGradeKey implements Serializable {

    @Column(name = "studentId")
    private Integer studentId;

    @Column(name = "lessonId")
    private Integer lessonId;

    public StudentLessonGradeKey(){}

    public StudentLessonGradeKey(Integer studentId, Integer lessonId) {
        this.studentId = studentId;
        this.lessonId = lessonId;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public Integer getlessonId() {
        return lessonId;
    }

    public void setlessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentLessonGradeKey that = (StudentLessonGradeKey) o;
        return Objects.equals(studentId, that.studentId) && Objects.equals(lessonId, that.lessonId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId, lessonId);
    }

}