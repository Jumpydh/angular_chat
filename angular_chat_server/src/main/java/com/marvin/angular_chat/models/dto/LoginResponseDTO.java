package com.marvin.angular_chat.models.dto;

public class LoginResponseDTO {
    private String jwt;
    private String username;
    private String userId;

    public LoginResponseDTO() {
        super();
    }
    public LoginResponseDTO(String jwt, String username, String userId) {
        super();
        this.jwt = jwt;
        this.username = username;
        this.userId = userId;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
