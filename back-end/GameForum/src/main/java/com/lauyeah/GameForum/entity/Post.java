package com.lauyeah.GameForum.entity;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table
@Data
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(name = "post_content", length = 16000, nullable = false)
    private String postContent;

    @Column(name = "post_cover", length = 1000)
    private String postCover;

    @Column(name = "post_date")
    @CreationTimestamp
    private LocalDateTime postDate;

    @Column(name = "post_status")
    @Enumerated(EnumType.STRING)
    private PostStatus postStatus = PostStatus.WAITING;

    @Column(name = "post_pin")
    @Enumerated(EnumType.STRING)
    private PostPin postPin;

    @ManyToOne
    @JoinColumn(name = "topic_id", referencedColumnName = "id")
    private Topic topic;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
