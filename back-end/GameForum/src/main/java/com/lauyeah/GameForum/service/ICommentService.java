package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Comment;
import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.form.CreatingCommentForm;
import com.lauyeah.GameForum.form.UpdatingCommentForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICommentService {
    Page<Comment> getAllComment(Pageable pageable);

    Comment getCommentById(int id);

    void deleteCommentById(int id);

    void createComment(CreatingCommentForm form);

    void updateComment(UpdatingCommentForm form);

    Page<Comment> getCommentByUserId(int id, Pageable pageable);

    Page<Comment> getCommentByPostId(int id, Pageable pageable);

    int getPostCommentCount(int id);
}
