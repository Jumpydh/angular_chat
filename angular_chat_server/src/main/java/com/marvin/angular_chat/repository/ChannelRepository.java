package com.marvin.angular_chat.repository;

import com.marvin.angular_chat.models.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChannelRepository extends MongoRepository<Channel, String>{
    Optional<Channel> findByName(String name);

    Optional<List<Channel>> findByUsersContaining(String user);
}
