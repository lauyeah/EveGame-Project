package com.lauyeah.GameForum.controller;

import com.lauyeah.GameForum.dto.PostDTO;
import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.entity.PostPin;
import com.lauyeah.GameForum.form.CreatingPostForm;
import com.lauyeah.GameForum.form.SetPostPinForm;
import com.lauyeah.GameForum.form.UpdatingPostForm;
import com.lauyeah.GameForum.service.IPostService;
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
@RequestMapping(value = "api/v1/posts")
@CrossOrigin("*")
public class PostController {
    @Autowired
    private IPostService postService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<PostDTO> getAllPost(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getAllPost(pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

    @GetMapping(value = "/topic/{id}")
    public Page<PostDTO> getPostByTopicId(@PathVariable(name = "id") int id, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getPostByTopicId(id, pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

    @GetMapping(value = "/allowed")
    public Page<PostDTO> getAllAllowedPost(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getAllAllowedPost(pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

    @GetMapping(value = "/denied")
    public Page<PostDTO> getAllDeniedPost(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getAllDeniedPost(pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

    @GetMapping(value = "/waiting")
    public Page<PostDTO> getAllWaitingPost(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getAllWaitingPost(pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

    @GetMapping(value = "/{id}")
    public PostDTO getPostById(@PathVariable(name = "id") int id) {
        Post post = postService.getPostById(id);
        return modelMapper.map(post, PostDTO.class);
    }

    // Get Pin Post
    @GetMapping(value = "/pin/{postPin}")
    public PostDTO getPinPost(@PathVariable(name = "postPin") String postPin) {
        Post post = postService.getPinPost(postPin);
        return modelMapper.map(post, PostDTO.class);
    }

    @PostMapping
    public void createPost(@RequestBody @Valid CreatingPostForm form) {
        postService.createPost(form);
    }

    @PutMapping(value = "/{id}")
    public void updatePost(@PathVariable(name = "id") int id, @RequestBody @Valid UpdatingPostForm form) {
        form.setId(id);
        postService.updatePost(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deletePost(@PathVariable(name = "id") int id) {
        postService.deletePostById(id);
    }

    @PutMapping(value = "/allow/{id}")
    public void setPostAllow(@PathVariable(name = "id") int id) {
        postService.setPostAllow(id);
    }

    @PutMapping(value = "/deny/{id}")
    public void setPostDeny(@PathVariable(name = "id") int id) {
        postService.setPostDeny(id);
    }

    @PutMapping(value = "/pin/set/{id}")
    public void setPostPin(@PathVariable(name = "id") int id, @RequestBody PostPin postPin) {
        postService.setPostPin(id, postPin);
    }

    @GetMapping(value = "/user/{id}")
    public Page<PostDTO> getPostByUserId(@PathVariable(name = "id") int id, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Post> postPages = postService.getPostByUserId(id, pageable);
        List<Post> postList = postPages.getContent();
        List<PostDTO> postDTOS = modelMapper.map(postList, new TypeToken<List<PostDTO>>() {
        }.getType());
        return new PageImpl<>(postDTOS, pageable, postPages.getTotalElements());
    }

}
