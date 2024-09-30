package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.StudentCourseGradeKey;
import dev.EduPrep.eduprep.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentCourseGradeRepository extends JpaRepository<StudentCourseGrade, StudentCourseGradeKey> {
    boolean existsById(StudentCourseGradeKey id);
    List<StudentCourseGrade> findByStudent_StudentId(Integer studentId);
}
