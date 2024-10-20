package dev.EduPrep.eduprep.services;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.CousineSimilarity;
import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.StudentCourseGradeRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecommendationService {

    private List<Course> allCourses;
    private List<StudentCourseGrade> studentCourseGrades;

    public RecommendationService(List<Course> allCourses_, List<StudentCourseGrade> studentCourseGrades_) {
        this.allCourses = allCourses_;
        this.studentCourseGrades = studentCourseGrades_;
    }

    public List<Course> getRecommendationCourseList(User student) {
        List<Course> RecommendatedCourses = new ArrayList<>();


        Set<Integer> alreadyTakenCourses = new HashSet<>();
        Set<Integer> alreadyCheckedCourses = new HashSet<>();
        Set<Integer> alreadyDeclinedCourses = new HashSet<>();

        for(StudentCourseGrade gradeObtained : studentCourseGrades){
            alreadyTakenCourses.add(gradeObtained.getCourse().getCourseId());
        }

        for(StudentCourseGrade gradeObtained : studentCourseGrades){
            Course takenCourse = searchById(gradeObtained.getCourse().getCourseId());
            for(Course course: allCourses){
                if(!alreadyTakenCourses.contains(course.getCourseId())  && !alreadyCheckedCourses.contains(course.getCourseId()) && !alreadyDeclinedCourses.contains(course.getCourseId()) ){
                    double cousineSimilarity = CousineSimilarity.cousine(takenCourse, course, gradeObtained.getGrade());
                    if(cousineSimilarity > 0.8){
                        RecommendatedCourses.add(course);
                        alreadyCheckedCourses.add(course.getCourseId());
                    } else {
                        alreadyDeclinedCourses.add(course.getCourseId());
                    }
                }
            }
        }
        
        return RecommendatedCourses;
    }


    ///Second Method
    private Course searchById(int idCourse){
        for( Course course: allCourses){
            if(course.getCourseId() == idCourse){
                return course;
            }
        }
        return null;
    }

}


