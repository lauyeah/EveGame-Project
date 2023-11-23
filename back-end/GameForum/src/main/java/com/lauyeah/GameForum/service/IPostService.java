package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.entity.PostPin;
import com.lauyeah.GameForum.form.CreatingPostForm;
import com.lauyeah.GameForum.form.SetPostPinForm;
import com.lauyeah.GameForum.form.UpdatingPostForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPostService {
    Page<Post> getAllPost(Pageable pageable);

    Post getPostById(int id);

    void deletePostById(int id);

    void createPost(CreatingPostForm form);

    void updatePost(UpdatingPostForm form);

    Page<Post> getAllAllowedPost(Pageable pageable);

    Page<Post> getAllDeniedPost(Pageable pageable);

    Page<Post> getAllWaitingPost(Pageable pageable);

    void setPostAllow(int id);

    void setPostDeny(int id);

    Page<Post> getPostByTopicId(int id, Pageable pageable);

    Post getPinPost(String postPin);

    void setPostPin(int id, PostPin postPin);

    Page<Post> getPostByUserId(int id, Pageable pageable);

}
