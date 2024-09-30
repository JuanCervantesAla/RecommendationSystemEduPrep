package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.StudentCourseGradeKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseGradeRepository extends JpaRepository<StudentCourseGrade, StudentCourseGradeKey> {
    boolean existsById(StudentCourseGradeKey id);
}
