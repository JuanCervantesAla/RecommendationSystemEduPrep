package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    long count();
    List<Course> findByCategory(String category);
    List<Course> findByName(String name);
}
