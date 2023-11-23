package com.lauyeah.GameForum.repository;

import com.lauyeah.GameForum.entity.Comment;
import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICommentRepository extends JpaRepository<Comment, Integer>, JpaSpecificationExecutor<Comment> {
    @Query("from Comment where user = :user order by id desc")
    List<Comment> getCommentByUserId(User user);

    @Query("from Comment where post = :post order by id desc")
    List<Comment> getCommentByPostId(Post post);

    //    @Query("count(*) from Comment where post = :post")
//    int getPostCommentCount(Post post);
    int countByPost(Post post);
}
