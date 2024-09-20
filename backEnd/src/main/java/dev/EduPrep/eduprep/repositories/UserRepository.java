package dev.EduPrep.eduprep.repositories;

import dev.EduPrep.eduprep.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
