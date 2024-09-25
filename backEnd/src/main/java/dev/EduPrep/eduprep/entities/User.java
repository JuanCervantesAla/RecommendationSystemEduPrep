package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

/*Author: Juan Cervantes
    Class user as a template
    Entity refers as an object in Database context
    Annotation @Table refers to the real name of the table in database
 */
@Entity
@Table(name="user")
public class User {

    //Attributes
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "firstname")//Column in a database context, the colum name in the database is name
    private String firstname;


    //Basic implementation of a class, CONSTRUCTOR GETTERS AND SETTERS
    public User(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return firstname;
    }

    public void setName(String name) {
        this.firstname = name;
    }
}
