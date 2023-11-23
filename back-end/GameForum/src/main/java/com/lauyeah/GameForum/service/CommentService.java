package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Comment;
import com.lauyeah.GameForum.entity.Post;
import com.lauyeah.GameForum.entity.User;
import com.lauyeah.GameForum.form.CreatingCommentForm;
import com.lauyeah.GameForum.form.UpdatingCommentForm;
import com.lauyeah.GameForum.repository.ICommentRepository;
import com.lauyeah.GameForum.repository.IPostRepository;
import com.lauyeah.GameForum.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService implements ICommentService {
    @Autowired
    private ICommentRepository commentRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IPostRepository postRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Page<Comment> getAllComment(Pageable pageable) {
        return commentRepository.findAll(pageable);
    }

    @Override
    public Comment getCommentById(int id) {
        return commentRepository.findById(id).get();
    }

    @Override
    public void deleteCommentById(int id) {
        commentRepository.deleteById(id);
    }

    @Override
    public void createComment(CreatingCommentForm form) {
        User user = userRepository.findById(form.getUser()).get();
        Post post = postRepository.findById(form.getPost()).get();
        Comment comment = modelMapper.map(form, Comment.class);
        comment.setUser(user);
        comment.setPost(post);
        commentRepository.save(comment);
    }

    @Override
    public void updateComment(UpdatingCommentForm form) {
        Comment comment = modelMapper.map(form, Comment.class);

        Comment commentTmp = commentRepository.findById(form.getId()).get();
        comment.setPost(commentTmp.getPost());
        comment.setUser(commentTmp.getUser());
        comment.setCmtDate(commentTmp.getCmtDate());

        commentRepository.save(comment);
    }

    @Override
    public Page<Comment> getCommentByUserId(int id, Pageable pageable) {
        User user = userRepository.findById(id).get();
        List<Comment> commentList = commentRepository.getCommentByUserId(user);
        return new PageImpl<>(commentList, pageable, commentList.size());
    }

    @Override
    public Page<Comment> getCommentByPostId(int id, Pageable pageable) {
        Post post = postRepository.findById(id).get();
        List<Comment> commentList = commentRepository.getCommentByPostId(post);
        return new PageImpl<>(commentList, pageable, commentList.size());
    }

    @Override
    public int getPostCommentCount(int id) {
        Post post = postRepository.findById(id).get();
        return commentRepository.countByPost(post);
    }
}
