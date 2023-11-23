package com.lauyeah.GameForum.form;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;

@Data
@NoArgsConstructor
public class UpdatingPostForm {
    private int id;
    private int topic;

    @Length(max = 100, message = "max 100 characters")
    private String title;

    @Length(max = 1000, message = "max 1000 characters")
    private String postCover;

    @Length(max = 16000, message = "max 16000 characters")
    private String postContent;
}
