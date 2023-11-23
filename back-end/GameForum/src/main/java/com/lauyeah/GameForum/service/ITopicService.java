package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Topic;
import com.lauyeah.GameForum.form.CreatingTopicForm;
import com.lauyeah.GameForum.form.UpdatingTopicForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITopicService {
    Page<Topic> getAllTopic(Pageable pageable);

    Topic getTopicById(int id);

    void deleteTopicById(int id);

    void createTopic(CreatingTopicForm form);

    void updateTopic(UpdatingTopicForm form);
}
