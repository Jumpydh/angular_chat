package com.marvin.angular_chat;

import com.marvin.angular_chat.models.ApplicationUser;
import com.marvin.angular_chat.models.Role;
import com.marvin.angular_chat.repository.ApplicationUserRepository;
import com.marvin.angular_chat.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class AngularChatApplication {


    public AngularChatApplication(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public static void main(String[] args) {
		SpringApplication.run(AngularChatApplication.class, args);
	}

	private final PasswordEncoder passwordEncoder;

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, ApplicationUserRepository applicationUserRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if(roleRepository.findByAuthority("ADMIN").isPresent()) {
				return;
			}

			applicationUserRepository.deleteAll();
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			Role userRole = roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			ApplicationUser admin = new ApplicationUser("admin", passwordEncoder.encode("password"), roles);

			applicationUserRepository.save(admin);
		};
	}
}
