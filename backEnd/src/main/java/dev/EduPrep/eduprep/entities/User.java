package dev.EduPrep.eduprep.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

/*Author: Juan Cervantes
    Class user as a template
    Entity refers as an object in Database context
    Annotation @Table refers to the real name of the table in database
 */
@Entity
public class User {

    //Attributes
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

//    @Column(name = "firstname")
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Integer idWorkshop = -1;

    @JsonIgnore
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private Collection<StudentCourseGrade> grades = new ArrayList<>();


    //Basic implementation of a class, CONSTRUCTOR GETTERS AND SETTERS
    public User(){}

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String name) {
        this.firstname = name;
    }


    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIdWorkshop() {
        return idWorkshop;
    }

    public void setIdWorkshop(Integer idWorkshop) {
        this.idWorkshop = idWorkshop;
    }

    public Collection<StudentCourseGrade> getGrades() {
        return grades;
    }

    public void setGrades(Collection<StudentCourseGrade> grades) {
        this.grades = grades;
    }
}
