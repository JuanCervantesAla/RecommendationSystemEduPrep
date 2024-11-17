package dev.EduPrep.eduprep.repositories;


import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Integer> {
    Optional<Lesson> findById(Integer lessonId);
}
