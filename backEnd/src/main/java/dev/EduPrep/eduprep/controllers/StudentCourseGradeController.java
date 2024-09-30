package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import dev.EduPrep.eduprep.repositories.StudentCourseGradeRepository;
import dev.EduPrep.eduprep.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/studentcoursegrade")
public class StudentCourseGradeController {

    private final StudentCourseGradeRepository studentCourseGradeRepository;
    private final UserRepository userRepository;


    public StudentCourseGradeController(StudentCourseGradeRepository studentCourseGradeRepository, UserRepository userRepository) {
        this.studentCourseGradeRepository = studentCourseGradeRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<StudentCourseGrade> courses(){
        return studentCourseGradeRepository.findAll();
    }

    @GetMapping("/{studentId}")
    public List<StudentCourseGrade> getCoursesByStudentId(@PathVariable Integer studentId) {
        return studentCourseGradeRepository.findByStudent_StudentId(studentId);
    }

}
