package com.lauyeah.GameForum.controller;

import com.lauyeah.GameForum.dto.CommentDTO;
import com.lauyeah.GameForum.entity.Comment;
import com.lauyeah.GameForum.form.CreatingCommentForm;
import com.lauyeah.GameForum.form.UpdatingCommentForm;
import com.lauyeah.GameForum.service.ICommentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/comments")
@CrossOrigin("*")
public class CommentController {
    @Autowired
    private ICommentService commentService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<CommentDTO> getAllComment(Pageable pageable) {
        Page<Comment> commentPages = commentService.getAllComment(pageable);
        List<Comment> commentList = commentPages.getContent();
        List<CommentDTO> commentDTOS = modelMapper.map(commentList, new TypeToken<List<CommentDTO>>() {
        }.getType());
        return new PageImpl<>(commentDTOS, pageable, commentPages.getTotalElements());
    }

    @GetMapping(value = "/{id}")
    public CommentDTO getCommentById(@PathVariable(name = "id") int id) {
        Comment comment = commentService.getCommentById(id);
        return modelMapper.map(comment, CommentDTO.class);
    }

    @GetMapping(value = "/user/{id}")
    public Page<CommentDTO> getCommentByUserId(Pageable pageable, @PathVariable(name = "id") int id) {
        Page<Comment> commentPages = commentService.getCommentByUserId(id, pageable);
        List<Comment> commentList = commentPages.getContent();
        List<CommentDTO> commentDTOS = modelMapper.map(commentList, new TypeToken<List<CommentDTO>>() {
        }.getType());
        return new PageImpl<>(commentDTOS, pageable, commentPages.getTotalElements());
    }

    @GetMapping(value = "/post/{id}")
    public Page<CommentDTO> getCommentByPostId(Pageable pageable, @PathVariable(name = "id") int id) {
        Page<Comment> commentPages = commentService.getCommentByPostId(id, pageable);
        List<Comment> commentList = commentPages.getContent();
        List<CommentDTO> commentDTOS = modelMapper.map(commentList, new TypeToken<List<CommentDTO>>() {
        }.getType());
        return new PageImpl<>(commentDTOS, pageable, commentPages.getTotalElements());
    }

    @PostMapping
    public void createComment(@Valid @RequestBody CreatingCommentForm form) {
        commentService.createComment(form);
    }

    @PutMapping(value = "/{id}")
    public void updateComment(@PathVariable(name = "id") int id, @Valid @RequestBody UpdatingCommentForm form) {
        form.setId(id);
        commentService.updateComment(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCommentById(@PathVariable(name = "id") int id) {
        commentService.deleteCommentById(id);
    }


    @GetMapping(value = "/post/{id}/count")
    public int getPostCommentCount(@PathVariable(name = "id") int id) {
        int postCmtCount = commentService.getPostCommentCount(id);
        return postCmtCount;
    }
}
