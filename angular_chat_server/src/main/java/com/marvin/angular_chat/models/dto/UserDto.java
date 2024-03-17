package com.marvin.angular_chat.models.dto;

import com.marvin.angular_chat.models.ApplicationUser;

import java.util.List;

public class UserDto {
    private String id;
    private String username;

    public UserDto() {
        super();
    }

    public UserDto(String id, String username) {
        this.id = id;
        this.username = username;
    }

    public UserDto(ApplicationUser applicationUser) {
        this.id = applicationUser.getUserId();
        this.username = applicationUser.getUsername();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
