package com.lauyeah.GameForum.form;

import com.lauyeah.GameForum.entity.Gender;
import com.lauyeah.GameForum.validate.UsernameNotExists;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
public class UpdatingUserForm {
    private int id;

    @Length(max = 30, message = "max 30 characters")
    @NotBlank(message = "can not blank")
    @Pattern(regexp = "\\S+", message = "Name must not contain whitespace")
    private String username;

    @Length(max = 100, message = "max 100 characters")
    @Email
    private String email;

    @Length(max = 500)
    private String avatar;

    @Length(max = 15)
    private String phone;

    @NotBlank(message = "can not blank")
    @Length(max = 50, message = "max 50 characters")
    private String fullname;

    @Pattern(regexp = "MALE|FEMALE|OTHER", message = "just choose one: MALE, FEMALE, OTHER")
    private String gender;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
}
