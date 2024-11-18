package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.Lesson;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import dev.EduPrep.eduprep.repositories.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/lesson")
public class LessonController {

    private final LessonRepository lessonRepository;

    @Autowired
    public LessonController(LessonRepository lessonRepository){this.lessonRepository = lessonRepository;}

    @GetMapping
    public List<Lesson> lessons(){ //Retrieves all the lessons
        return lessonRepository.findAll();
    }

}
