package dev.EduPrep.eduprep.entities;

import jakarta.persistence.*;

@Entity
public class Section {

    /**********Attributes************/
    @Id//Indicates this att is ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sectionId;

    private String title;
    private String allSectionText;
    private String imgUrl;

    @ManyToOne
    @JoinColumn(name = "lessonId", nullable = false)
    private Lesson lesson;


    /**********Constructor****************/
    public Section(String title_, String allSectionText_, String imgUrl_){
        this.title = title_;
        this.allSectionText = allSectionText_;
        this.imgUrl = imgUrl_;
    }


    /***********************Getter and Setter***************/
    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAllSectionText() {
        return allSectionText;
    }

    public void setAllSectionText(String allSectionText) {
        this.allSectionText = allSectionText;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
