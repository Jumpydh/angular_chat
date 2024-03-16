package com.marvin.angular_chat.models.dto;

public class LoginResponseDTO {
    private String jwt;

    public LoginResponseDTO() {
        super();
    }
    public LoginResponseDTO(String jwt) {
        super();
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
