package com.lauyeah.GameForum.repository;

import com.lauyeah.GameForum.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ITopicRepository extends JpaRepository<Topic, Integer>, JpaSpecificationExecutor<Topic> {
}
