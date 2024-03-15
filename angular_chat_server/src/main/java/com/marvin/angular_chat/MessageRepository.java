package com.marvin.angular_chat;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findByUser(String user);

    List<Message> findByText(String text);
}
