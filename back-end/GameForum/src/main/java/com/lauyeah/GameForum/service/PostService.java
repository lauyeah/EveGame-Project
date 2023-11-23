package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.*;
import com.lauyeah.GameForum.form.CreatingPostForm;
import com.lauyeah.GameForum.form.SetPostPinForm;
import com.lauyeah.GameForum.form.UpdatingPostForm;
import com.lauyeah.GameForum.repository.IPostRepository;
import com.lauyeah.GameForum.repository.ITopicRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService implements IPostService {
    @Autowired
    private IPostRepository postRepository;

    @Autowired
    private IUserService userService;

    @Autowired
    private ITopicRepository topicRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public Page<Post> getAllPost(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @Override
    public Post getPostById(int id) {
        return postRepository.findById(id).get();
    }

    @Override
    public void deletePostById(int id) {
        postRepository.deleteById(id);
    }

    @Override
    public void createPost(CreatingPostForm form) {
        User user = userService.getUserById(form.getUser());
        Topic topic = topicRepository.findById(form.getTopic()).get();
        Post post = modelMapper.map(form, Post.class);
        post.setUser(user);
        post.setTopic(topic);
        if (userService.isAdminUserById(form.getUser())) {
            post.setPostStatus(PostStatus.ALLOWED);
        }
        postRepository.save(post);
    }

    @Override
    public void updatePost(UpdatingPostForm form) {
        Post post = modelMapper.map(form, Post.class);

        Post postTmp = postRepository.findById(form.getId()).get();
        Topic topic = topicRepository.findById(form.getTopic()).get();
        post.setTopic(topic);
        post.setUser(postTmp.getUser());
        post.setPostDate(postTmp.getPostDate());
        post.setPostStatus(postTmp.getPostStatus());
        post.setPostPin(postTmp.getPostPin());

        postRepository.save(post);
    }

    @Override
    public Page<Post> getAllAllowedPost(Pageable pageable) {
        List<Post> allowedPosts = postRepository.getAllAllowedPost();
        return new PageImpl<>(allowedPosts, pageable, allowedPosts.size());
    }

    @Override
    public Page<Post> getAllDeniedPost(Pageable pageable) {
        List<Post> deniedPosts = postRepository.getAllDeniedPost();
        return new PageImpl<>(deniedPosts, pageable, deniedPosts.size());
    }

    @Override
    public Page<Post> getAllWaitingPost(Pageable pageable) {
        List<Post> waitingPosts = postRepository.getAllWaitingPost();
        return new PageImpl<>(waitingPosts, pageable, waitingPosts.size());
    }

    @Override
    public void setPostAllow(int id) {
        postRepository.setPostAllow(id);
    }

    @Override
    public void setPostDeny(int id) {
        postRepository.setPostDeny(id);
    }

    @Override
    public Page<Post> getPostByTopicId(int id, Pageable pageable) {
        Topic topic = topicRepository.findById(id).get();
        List<Post> postList = postRepository.getPostByTopic(topic);
        return new PageImpl<>(postList, pageable, postList.size());
    }

    @Override
    public Post getPinPost(String postPin) {
        PostPin postPinEnum = PostPin.valueOf(postPin.toUpperCase());
        return postRepository.getPinPost(postPinEnum);
    }

    @Override
    public void setPostPin(int id, PostPin postPin) {
        postRepository.setPostUnpin(postPin);
        postRepository.setPostPin(id, postPin);
    }

    @Override
    public Page<Post> getPostByUserId(int id, Pageable pageable) {
        User user = userService.getUserById(id);
        List<Post> userPosts = postRepository.findByUser(user);
        return new PageImpl<>(userPosts, pageable, userPosts.size());
    }

}
