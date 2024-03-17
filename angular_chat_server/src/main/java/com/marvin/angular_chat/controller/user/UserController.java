package com.marvin.angular_chat.controller.user;

import com.marvin.angular_chat.models.dto.UserDto;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final ApplicationUserRepository applicationUserRepository;

    public UserController(ApplicationUserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }

    @GetMapping
    public List<UserDto> getUsers(){
        return applicationUserRepository.findAll().stream().map(UserDto::new).toList();
    }
}
