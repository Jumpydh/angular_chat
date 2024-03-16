package com.marvin.angular_chat.repository;

import com.marvin.angular_chat.models.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findByUser(String user);

    List<Message> findByText(String text);
}
