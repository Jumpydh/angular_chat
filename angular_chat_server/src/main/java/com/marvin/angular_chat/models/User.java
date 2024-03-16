package com.marvin.angular_chat.models;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String status;
    private String created_at;
    private String updated_at;

    public User(String id, String name, String email, String password, String role, String status, String created_at, String updated_at) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    @Override
    public String toString() {
        return String.format(
                "User{id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role + ", status=" + status + ", created_at=" + created_at + ", updated_at=" + updated_at + "}"
        );
    }
}
