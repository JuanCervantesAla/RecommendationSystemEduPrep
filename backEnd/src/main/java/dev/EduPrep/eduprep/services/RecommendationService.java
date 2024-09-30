package dev.EduPrep.eduprep.services;

import dev.EduPrep.eduprep.entities.Course;
import dev.EduPrep.eduprep.entities.StudentCourseGrade;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.StudentCourseGradeRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecommendationService {

    private final StudentCourseGradeRepository studentCourseGradeRepository;

    public RecommendationService(StudentCourseGradeRepository studentCourseGradeRepository) {
        this.studentCourseGradeRepository = studentCourseGradeRepository;
    }

    public List<Course> recommendCoursesUsingCosineSimilarityWithDifficulty(User student, List<Course> allCourses) {
        // Obtener calificaciones de los cursos completados por el estudiante
        List<StudentCourseGrade> completedGrades = studentCourseGradeRepository.findByStudent_StudentId(student.getStudentId());

        // Crear un mapa para almacenar las calificaciones por curso
        Map<Integer, Double> courseGrades = new HashMap<>();
        for (StudentCourseGrade grade : completedGrades) {
            courseGrades.put(grade.getCourse().getCourseId(), grade.getGrade());
        }

        // Crear un vector para las calificaciones del estudiante y un vector para la dificultad
        double[] studentVector = new double[allCourses.size()];
        double[] difficultyVector = new double[allCourses.size()];
        double[] durationVector = new double[allCourses.size()];

        for (int i = 0; i < allCourses.size(); i++) {
            Course course = allCourses.get(i);
            studentVector[i] = courseGrades.getOrDefault(course.getCourseId(), 0.0);
            difficultyVector[i] = course.getDifficult();
            durationVector[i] = course.getTimedurationmonth();
        }

        // Listar cursos recomendados
        List<Course> recommendedCourses = new ArrayList<>();

        for (Course course : allCourses) {
            if (!courseGrades.containsKey(course.getCourseId())) { // No recomendar cursos ya completados
                double[] courseVector = new double[]{course.getDifficult(), course.getTimedurationmonth()}; // Mejor vector

                // Calcular la similitud del coseno
                double similarityDifficulty = cosineSimilarity(studentVector, difficultyVector);
                double similarityDuration = cosineSimilarity(studentVector, durationVector);

                // Combinación de las similitudes
                double combinedSimilarity = 0.7 * similarityDifficulty + 0.3 * similarityDuration;

                // Factor de aleatoriedad más controlado
                //double randomFactor = (Math.random() - 0.5) / 10;
                double randomFactor = Math.random();

                if (combinedSimilarity + randomFactor > 1.0 ) {
                    recommendedCourses.add(course);
                }
            }
        }

        if (recommendedCourses.isEmpty()) {
            System.out.println("No recommendations available based on cosine similarity with difficulty.");
        }

        return recommendedCourses;
    }

    // Método para calcular la similitud del coseno
    private double cosineSimilarity(double[] vectorA, double[] vectorB) {
        double dotProduct = 0.0;
        double normA = 0.0;
        double normB = 0.0;
        for (int i = 0; i < vectorA.length; i++) {
            dotProduct += vectorA[i] * vectorB[i];
            normA += Math.pow(vectorA[i], 2);
            normB += Math.pow(vectorB[i], 2);
        }
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }
}


