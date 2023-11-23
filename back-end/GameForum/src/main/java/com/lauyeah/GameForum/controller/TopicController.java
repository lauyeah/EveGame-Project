package com.lauyeah.GameForum.controller;

import com.lauyeah.GameForum.entity.Topic;
import com.lauyeah.GameForum.form.CreatingTopicForm;
import com.lauyeah.GameForum.form.UpdatingTopicForm;
import com.lauyeah.GameForum.service.ITopicService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "api/v1/topics")
@CrossOrigin("*")
public class TopicController {
    @Autowired
    private ITopicService topicService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<Topic> getAllTopic(@PageableDefault(sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        return topicService.getAllTopic(pageable);
    }

    @GetMapping(value = "/{id}")
    public Topic getTopicById(@PathVariable(name = "id") int id) {
        return topicService.getTopicById(id);
    }

    @PostMapping
    public void createTopic(@RequestBody @Valid CreatingTopicForm form) {
        topicService.createTopic(form);
    }

    @PutMapping(value = "/{id}")
    public void updateTopic(@PathVariable(name = "id") int id, @RequestBody @Valid UpdatingTopicForm form) {
        form.setId(id);
        topicService.updateTopic(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteTopic(@PathVariable(name = "id") int id) {
        topicService.deleteTopicById(id);
    }
}
