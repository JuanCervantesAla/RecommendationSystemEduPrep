package dev.EduPrep.eduprep.controllers;


import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseController(CourseRepository courseRepository){this.courseRepository = courseRepository;}

    @GetMapping
    public List<Course> courses(){
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseId(@PathVariable Integer id){
        Optional<Course> course = courseRepository.findById(id);
        return course.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
