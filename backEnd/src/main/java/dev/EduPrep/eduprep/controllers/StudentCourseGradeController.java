package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.StudentCourseGradeKey;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import dev.EduPrep.eduprep.repositories.StudentCourseGradeRepository;
import dev.EduPrep.eduprep.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/studentcoursegrade")
public class StudentCourseGradeController {

    @Autowired
    private final StudentCourseGradeRepository studentCourseGradeRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final CourseRepository courseRepository;

    @Autowired
    public StudentCourseGradeController(
            StudentCourseGradeRepository studentCourseGradeRepository,
            UserRepository userRepository,
            CourseRepository courseRepository) {
        this.studentCourseGradeRepository = studentCourseGradeRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<StudentCourseGrade> courses(){
        return studentCourseGradeRepository.findAll();
    }

    @GetMapping("/{studentId}")
    public List<StudentCourseGrade> getCoursesByStudentId(@PathVariable Integer studentId) {
        return studentCourseGradeRepository.findByStudent_StudentId(studentId);
    }

    @GetMapping("/check-enrollment/{studentId}/{courseId}")
    public boolean checkEnrollment(@PathVariable Integer studentId, @PathVariable Integer courseId) {
        return studentCourseGradeRepository.existsByStudent_StudentIdAndCourse_CourseId(studentId, courseId);
    }

    @PostMapping("/add/{studentId}/{courseId}/{grade}")
    public ResponseEntity<String> addStudentCourseGrade(
            @PathVariable Integer studentId,
            @PathVariable Integer courseId,
            @PathVariable float grade) {

        User student = userRepository.findById(studentId).orElse(null);
        Course course = courseRepository.findById(courseId).orElse(null);

        if (student == null || course == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Estudiante o curso no encontrado");
        }

        StudentCourseGrade studentCourseGrade = new StudentCourseGrade();
        StudentCourseGradeKey studentCourseGradeKey = new StudentCourseGradeKey(studentId, courseId);
        studentCourseGrade.setStudentCourseGradeKey(studentCourseGradeKey);
        studentCourseGrade.setStudent(student);
        studentCourseGrade.setCourse(course);
        studentCourseGrade.setGrade(grade);


        studentCourseGradeRepository.save(studentCourseGrade);

        return ResponseEntity.status(HttpStatus.CREATED).body("Registro agregado exitosamente");
    }
}
