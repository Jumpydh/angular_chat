package com.marvin.angular_chat.controller.channel;

import com.marvin.angular_chat.models.ApplicationUser;
import com.marvin.angular_chat.models.Channel;
import com.marvin.angular_chat.models.dto.UserDto;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import com.marvin.angular_chat.repository.ChannelRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/channels/{channelId}/users")
public class UserController {

    private final ApplicationUserRepository applicationUserRepository;

    private final ChannelRepository channelRepository;

    public UserController(ApplicationUserRepository applicationUserRepository, ChannelRepository channelRepository) {
        this.applicationUserRepository = applicationUserRepository;
        this.channelRepository = channelRepository;
    }

    @GetMapping
    public List<UserDto> getUsers(@PathVariable("channelId") String channelId){
        System.out.println("GET /channels/"+channelId+"/users");
        Optional<Channel> channel = channelRepository.findById(channelId);
        List<String> users = channel.get().getUsers();
        List<ApplicationUser> usersList = applicationUserRepository.findByUserIdIn(users).get();

        return usersList.stream().map(UserDto::new).toList();
    }
}
