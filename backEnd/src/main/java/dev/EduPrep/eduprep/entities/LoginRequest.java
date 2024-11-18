package dev.EduPrep.eduprep.entities;

public class LoginRequest {
    private String email;
    private String password;

    // Getters y setters
    public String getEmail() {
        return email;
    }

    public void setUsername(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
