package com.marvin.angular_chat.repository;

import com.marvin.angular_chat.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByAuthority(String authority);

    Optional<Role> findByRoleId(String roleId);
}
