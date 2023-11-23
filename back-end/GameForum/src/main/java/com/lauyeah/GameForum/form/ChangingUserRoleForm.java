package com.lauyeah.GameForum.form;

import com.lauyeah.GameForum.entity.Role;
import javax.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChangingUserRoleForm {
    private int id;

    @Pattern(regexp = "ADMIN|MEMBER", message = "just choose one: ADMIN or MEMBER")
    private String newRole;
}
