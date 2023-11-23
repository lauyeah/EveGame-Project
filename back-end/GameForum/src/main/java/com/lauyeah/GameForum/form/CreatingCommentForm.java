package com.lauyeah.GameForum.form;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@NoArgsConstructor
public class CreatingCommentForm {
    private int user;
    private int post;

    @Length(max = 1000, message = "max 1000 characters")
    private String cmtContent;
}
