package com.marvin.angular_chat.controller.channel;

import com.marvin.angular_chat.models.Channel;
import com.marvin.angular_chat.models.dto.ChannelCreationDTO;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import com.marvin.angular_chat.repository.ChannelRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/channels")
public class ChannelController {

    private final ChannelRepository channelRepository;

    private final ApplicationUserRepository applicationUserRepository;

    public ChannelController(ChannelRepository channelRepository, ApplicationUserRepository applicationUserRepository) {
        this.channelRepository = channelRepository;
        this.applicationUserRepository = applicationUserRepository;
    }

    @GetMapping
    public List<Channel> getChannels() {
        String userId = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("GET /channels/all for user " + userId);
        Optional<List<Channel>>  channel = channelRepository.findByUsersContaining(userId);
        return channel.orElse(null);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createChannel(@RequestBody ChannelCreationDTO channel) {
        String userId = SecurityContextHolder.getContext().getAuthentication().getName();
        channel.AddUser(userId);
        System.out.println("POST /channels/create");
        channelRepository.save(new Channel(null, channel.getName(), channel.getUsers()));
    }
}
