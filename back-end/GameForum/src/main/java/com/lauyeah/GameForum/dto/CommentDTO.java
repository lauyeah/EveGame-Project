package com.lauyeah.GameForum.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
public class CommentDTO {
    private int id;
    private String cmtContent;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime cmtDate;
    private int postId;
    private UserDTO user;

    @Data
    @NoArgsConstructor
    static class UserDTO {
        private int id;
        private String username;
        private String avatar;
        private String fullname;
    }
}
