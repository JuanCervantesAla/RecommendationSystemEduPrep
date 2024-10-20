package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);//Search in the repository by email
}
