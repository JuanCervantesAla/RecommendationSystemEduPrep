package dev.EduPrep.eduprep.controllers;


import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseController(CourseRepository courseRepository){this.courseRepository = courseRepository;}

    @GetMapping
    public List<Course> courses(){ //Retrieves all the courses
        return courseRepository.findAll();
    }

    @GetMapping("/category/{category}")
    public List<Course> getCoursesByCategory(@PathVariable String category) {
        return courseRepository.findByCategory(category);
    }

    @GetMapping("/name/{name}")
    public List<Course> getCoursesByFullName(@PathVariable String name) {
        return courseRepository.findByName(name);
    }

    @GetMapping("/quantity")
    public ResponseEntity<Long> howMany(){
        long howManyCourse = courseRepository.count();
        return ResponseEntity.ok(howManyCourse);
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Course> getCourseId(@PathVariable Integer id){
        Optional<Course> course = courseRepository.findById(id);
        return course.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @GetMapping("/name/{name}")
//    public ResponseEntity<Course> getCourseName(@PathVariable String name){
//        Optional<Course> course = courseRepository.findByName(name);
//        return course.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }


    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Integer id, @RequestBody Course courseDetails) {
        return courseRepository.findById(id)
                .map(course -> {
                    course.setName(courseDetails.getName());
                    course.setTextintroduction(courseDetails.getTextintroduction());
                    course.setTimedurationmonth(courseDetails.getTimedurationmonth());
                    course.setIsWorkshop(courseDetails.getIsWorkshop());
                    course.setDifficult(courseDetails.getDifficult());
                    course.setHowManyLesson(courseDetails.getHowManyLesson());
                    course.setCategory(courseDetails.getCategory());
                    Course updatedCourse = courseRepository.save(course);
                    return ResponseEntity.ok().body(updatedCourse);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCourse(@PathVariable Integer id) {
        return courseRepository.findById(id)
                .map(course -> {
                    courseRepository.delete(course);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }


}
