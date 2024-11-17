package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.Exam;
import dev.EduPrep.eduprep.repositories.CourseRepository;
import dev.EduPrep.eduprep.repositories.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/exam")
public class ExamController {

    private final ExamRepository examRepository;

    @Autowired
    public ExamController(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    @GetMapping
    public List<Exam> exams() {
        return examRepository.findAll();
    }
}
