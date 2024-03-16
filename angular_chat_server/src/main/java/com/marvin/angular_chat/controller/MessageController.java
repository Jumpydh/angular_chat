package com.marvin.angular_chat.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.marvin.angular_chat.models.ApplicationUser;
import com.marvin.angular_chat.models.Message;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import com.marvin.angular_chat.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.ConnectableFlux;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.time.Duration;
import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
public class MessageController {

    private final MessageRepository messageRepository;

    private FluxSink<Message> eventSink;
    private final ConnectableFlux<Message> eventFlux;
    private final ApplicationUserRepository applicationUserRepository;

    public MessageController(MessageRepository messageRepository, ApplicationUserRepository applicationUserRepository) {
        this.messageRepository = messageRepository;
        Flux<Message> stream = Flux.create(sink -> this.eventSink = sink, FluxSink.OverflowStrategy.LATEST);
        this.eventFlux = Mono.just(1).repeat()
                .delayElements(Duration.ofMillis(1000))
                .concatMap(i -> stream)
                .publish();
        this.eventFlux.connect();
        this.applicationUserRepository = applicationUserRepository;
    }

    @CrossOrigin
    @GetMapping("/messages")
    public List<Message> run() {
        System.out.println("GET /messages");
        return messageRepository.findAll();
    }

    @CrossOrigin
    @PutMapping("/messages")
    public void putMessage(@RequestBody String message) {
        String user_id = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<ApplicationUser> user = applicationUserRepository.findById(user_id);
        messageRepository.save(new Message(null, message, user.get().getUsername(), java.time.LocalDateTime.now().toString()));
        System.out.println(messageRepository.findByUser("Marvin"));
        eventSink.next(new Message(null, message, "Marvin", java.time.LocalDateTime.now().toString()));
    }

    @GetMapping(path = "/messages/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Message> getEvents() {
        return eventFlux;
    }
}

