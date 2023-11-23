package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Topic;
import com.lauyeah.GameForum.form.CreatingTopicForm;
import com.lauyeah.GameForum.form.UpdatingTopicForm;
import com.lauyeah.GameForum.repository.ITopicRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TopicService implements ITopicService {
    @Autowired
    private ITopicRepository topicRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Page<Topic> getAllTopic(Pageable pageable) {
        return topicRepository.findAll(pageable);
    }

    @Override
    public Topic getTopicById(int id) {
        return topicRepository.findById(id).get();
    }

    @Override
    public void deleteTopicById(int id) {
        topicRepository.deleteById(id);
    }

    @Override
    public void createTopic(CreatingTopicForm form) {
        Topic topic = modelMapper.map(form, Topic.class);
        topicRepository.save(topic);
    }

    @Override
    public void updateTopic(UpdatingTopicForm form) {
        Topic topic = modelMapper.map(form, Topic.class);
        topicRepository.save(topic);
    }
}
