package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.StudentCourseGradeKey;
import dev.EduPrep.eduprep.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentCourseGradeRepository extends JpaRepository<StudentCourseGrade, StudentCourseGradeKey> {
    boolean existsById(StudentCourseGradeKey id);

    List<StudentCourseGrade> findByStudent_StudentId(Integer studentId);

    boolean existsByStudent_StudentIdAndCourse_CourseId(Integer studentId, Integer courseId);

    @Query("SELECT scg FROM StudentCourseGrade scg WHERE scg.progress = 100")
    List<StudentCourseGrade> findByProgressEquals100();

    @Query("SELECT scg FROM StudentCourseGrade scg WHERE scg.progress < 100")
    List<StudentCourseGrade> findByProgressLeesThan100();
}
