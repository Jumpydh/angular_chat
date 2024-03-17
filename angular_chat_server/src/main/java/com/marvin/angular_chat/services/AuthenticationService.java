package com.marvin.angular_chat.services;

import com.marvin.angular_chat.models.ApplicationUser;
import com.marvin.angular_chat.models.Role;
import com.marvin.angular_chat.models.dto.LoginResponseDTO;
import com.marvin.angular_chat.models.dto.UserDto;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import com.marvin.angular_chat.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {

    private final ApplicationUserRepository applicationUserRepository;

    private final RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final TokenService tokenService;

    public AuthenticationService(ApplicationUserRepository applicationUserRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, TokenService tokenService) {
        this.applicationUserRepository = applicationUserRepository;
        this.roleRepository = roleRepository;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    public UserDto registerUser(String username, String password) {

        String encodedPassword = passwordEncoder.encode(password);
        System.out.println("-----------------");
        System.out.println(encodedPassword);
        System.out.println("-----------------");

        Role userRole = roleRepository.findByAuthority("USER").get();

        Set<Role> roles = Set.of(userRole);


        return new UserDto(applicationUserRepository.save(
                new ApplicationUser(username, encodedPassword, roles))
        );
    }


    public LoginResponseDTO loginUser(String username, String password) {

        Optional<ApplicationUser> user = applicationUserRepository.findByUsername(username);
        if (user.isEmpty()) {
            return new LoginResponseDTO("Error: User not found","","");
        }

        boolean isPasswordMatch = passwordEncoder.matches(password, user.get().getPassword());
        System.out.println("Is password match: " + isPasswordMatch);

        if (!isPasswordMatch) {
            return new LoginResponseDTO("Error: Password not match","","");
        }

        String token = tokenService.generateJwt(user.get());
        return new LoginResponseDTO(token,  user.get().getUsername(),user.get().getUserId());

    }
}

