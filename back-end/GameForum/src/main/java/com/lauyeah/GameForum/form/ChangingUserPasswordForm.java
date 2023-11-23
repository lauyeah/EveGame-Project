package com.lauyeah.GameForum.form;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChangingUserPasswordForm {
    private int id;
    private String oldPassword;
    private String newPassword;
    private String confirmPassword;
}
