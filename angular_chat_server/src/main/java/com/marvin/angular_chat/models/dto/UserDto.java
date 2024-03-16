package com.marvin.angular_chat.models.dto;

import com.marvin.angular_chat.models.ApplicationUser;

public class UserDto {
    private String id;
    private String username;

    public UserDto(String id, String username) {
        this.id = id;
        this.username = username;
    }

    public UserDto(ApplicationUser applicationUser) {
        this.id = applicationUser.getUserId();
        this.username = applicationUser.getUsername();
    }
}
