package com.lauyeah.GameForum.form;

import com.lauyeah.GameForum.entity.Gender;
import com.lauyeah.GameForum.validate.UsernameNotExists;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;


@Data
@NoArgsConstructor
public class CreatingUserForm {
    @Length(max = 30, message = "max 30 characters")
    @NotBlank(message = "can not blank")
    @UsernameNotExists
    @Pattern(regexp = "\\S+", message = "Name must not contain whitespace")
    private String username;

    @Length(max = 100, message = "max 100 characters")
    @Email
    private String email;

    @NotBlank(message = "can not blank")
    @Length(max = 800, message = "max 800 characters")
    private String password;

    @Length(max = 500)
    private String avatar;

    @Length(max = 15)
    private String phone;

    @NotBlank(message = "can not blank")
    @Length(max = 50, message = "max 50 characters")
    private String fullname;

    @Pattern(regexp = "MALE|FEMALE|OTHER", message = "just choose one: MALE or FEMALE or OTHER")
    private String gender;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
}
