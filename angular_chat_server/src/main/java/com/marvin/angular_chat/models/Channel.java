package com.marvin.angular_chat.models;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Channel {
    @Id
    private String id;

    private String name;

    private List<String> users;

    public Channel() {
        super();
    }

    public Channel(String id, String name, List<String> users) {
        this.id = id;
        this.name = name;
        this.users = users;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getUsers() {
        return users;
    }

    public void setUsers(List<String> users) {
        this.users = users;
    }
}
