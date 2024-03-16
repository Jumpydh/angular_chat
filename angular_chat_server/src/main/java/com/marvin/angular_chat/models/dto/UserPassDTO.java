package com.marvin.angular_chat.models.dto;

public class UserPassDTO {
    private String username;
    private String password;


    public UserPassDTO() {
        super();
    }

    public UserPassDTO(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
