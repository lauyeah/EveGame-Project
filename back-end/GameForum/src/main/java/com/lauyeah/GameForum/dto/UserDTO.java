package com.lauyeah.GameForum.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.lauyeah.GameForum.entity.Gender;
import com.lauyeah.GameForum.entity.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class UserDTO {
    private int id;
    private String username;
    private String fullname;
    private Gender gender;
    private String email;
    private String avatar;
    private String phone;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime joinDate;
    private Role role;
    private boolean activation;
}
