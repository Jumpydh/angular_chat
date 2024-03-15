package com.marvin.angular_chat;

import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {

    @Autowired
    private MessageRepository messageRepository;

    @CrossOrigin(origins = "http://angular_chat_webapp:4200")
    @GetMapping("/messages")
    public List<Message> run() {
        List<Message> messages = messageRepository.findAll();
        return messages;
    }

    @CrossOrigin(origins = "http://angular_chat_webapp:4200")
    @PutMapping("/messages")
    public void putMessage(@RequestBody String message) {
        messageRepository.save(new Message(null, message, "Marvin", java.time.LocalDateTime.now().toString()));
        System.out.println(messageRepository.findByUser("Marvin"));
    }
}

