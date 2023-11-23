package com.lauyeah.GameForum.repository;

import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.entity.PostPin;
import com.lauyeah.GameForum.entity.Topic;
import com.lauyeah.GameForum.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IPostRepository extends JpaRepository<Post, Integer>, JpaSpecificationExecutor<Post> {
    @Query("from Post where postStatus = 'ALLOWED' order by id desc")
    List<Post> getAllAllowedPost();

    @Query("from Post where postStatus = 'DENIED' order by id desc")
    List<Post> getAllDeniedPost();

    @Query("from Post where postStatus = 'WAITING' order by id desc")
    List<Post> getAllWaitingPost();

    @Transactional
    @Modifying
    @Query("update Post set postStatus = 'ALLOWED' where id = :id")
    void setPostAllow(int id);

    @Transactional
    @Modifying
    @Query("update Post set postStatus = 'DENIED' where id = :id")
    void setPostDeny(int id);

    @Query("from Post where topic = :topic and postStatus = 'ALLOWED' order by id desc")
    List<Post> getPostByTopic(Topic topic);

    @Query("from Post where postPin = :postPin")
    Post getPinPost(PostPin postPin);

    @Transactional
    @Modifying
    @Query("update Post set postPin = NULL where postPin = :postPin")
    void setPostUnpin(PostPin postPin);

    @Transactional
    @Modifying
    @Query("update Post set postPin = :postPin where id = :id")
    void setPostPin(int id, PostPin postPin);

    List<Post> findByUser(User user);
}
