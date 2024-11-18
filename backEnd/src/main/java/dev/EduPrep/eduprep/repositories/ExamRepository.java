package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.Exam;
import dev.EduPrep.eduprep.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamRepository extends JpaRepository<Exam,Integer> {

}
