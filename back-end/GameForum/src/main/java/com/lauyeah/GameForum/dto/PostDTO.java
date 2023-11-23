package com.lauyeah.GameForum.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.lauyeah.GameForum.entity.PostPin;
import com.lauyeah.GameForum.entity.PostStatus;
import com.lauyeah.GameForum.entity.Topic;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class PostDTO {
    private int id;
    private String title;
    private String postCover;
    private String postContent;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime postDate;
    private Topic topic;
    private UserDTO user;
    private PostStatus postStatus;
    private PostPin postPin;

    @Data
    @NoArgsConstructor
    static class UserDTO {
        private int id;
        private String username;
        private String avatar;
        private String fullname;
    }
}
