package com.marvin.angular_chat.models;

import org.springframework.data.annotation.Id;

public class Message {
    @Id
    private String id;
    private String text;
    private String user;
    private String created_at;

    public Message() {
    }

    public Message(String id, String text, String user, String created_at) {
        this.id = id;
        this.text = text;
        this.user = user;
        this.created_at = created_at;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }
}
