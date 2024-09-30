package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.exceptions.ResourceNotFoundException;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import dev.EduPrep.eduprep.repositories.StudentCourseGradeRepository;
import dev.EduPrep.eduprep.repositories.UserRepository;
import dev.EduPrep.eduprep.services.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/recommendation")
public class RecommendationServiceController {

    @Autowired
    private RecommendationService recommendationService;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentCourseGradeRepository studentCourseGradeRepository;

    @GetMapping("/{studentId}")
    public ResponseEntity<List<Course>> getRecommendedCourses(@PathVariable Integer studentId){
        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Estudiante no encontrado"));

        List<Course> allCourses = courseRepository.findAll();
        List<StudentCourseGrade> completedGrades = studentCourseGradeRepository.findByStudent_StudentId(studentId);

        if(completedGrades.isEmpty()){
            System.out.println("This mf ain't studin: " + student.getStudentId());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
        }

        List<Course> recommendedCourses = recommendationService.recommendCoursesUsingCosineSimilarityWithDifficulty(student, allCourses);
        if (recommendedCourses.isEmpty()) {
            System.out.println("Some shi going thru you stuff g: " + student.getStudentId());
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(Collections.emptyList());
        }


        return ResponseEntity.ok(recommendedCourses);

    }
}
