package com.marvin.angular_chat.models.dto;

import java.util.List;

public class ChannelCreationDTO {
    private String name;
    private List<String> users;

    public ChannelCreationDTO() {
    }

    public ChannelCreationDTO(String name, List<String> user) {
        this.name = name;
        this.users = user;
    }

    public String getName() {
        return name;
    }

    public void AddUser(String user) {
        this.users.add(user);
    }
    public List<String> getUsers() {
        return users;
    }
}
