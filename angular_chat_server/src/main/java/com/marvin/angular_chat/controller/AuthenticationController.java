package com.marvin.angular_chat.controller;

import com.marvin.angular_chat.models.dto.LoginResponseDTO;
import com.marvin.angular_chat.models.dto.UserPassDTO;
import com.marvin.angular_chat.services.AuthenticationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthenticationController {
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserPassDTO registrationDTO) {
        authenticationService.registerUser(registrationDTO.getUsername(), registrationDTO.getPassword());
        return "User registered";
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody UserPassDTO userPassDTO) {
        return authenticationService.loginUser(userPassDTO.getUsername(), userPassDTO.getPassword());
    }

    @GetMapping("/user")
    public String getUser() {
    return "User";
    }
}
