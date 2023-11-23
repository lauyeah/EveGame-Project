package com.lauyeah.GameForum.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginInfoDTO {
    private int id;
    private String username;
    private String fullname;
}
