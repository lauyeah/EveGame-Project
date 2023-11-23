package com.lauyeah.GameForum.form;

import javax.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@NoArgsConstructor
public class UpdatingTopicForm {
    private int id;

    @Length(max = 50, message = "max 50 characters")
    @NotBlank(message = "can not blank")
    private String name;
}
