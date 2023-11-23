package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Role;
import com.lauyeah.GameForum.entity.User;
import com.lauyeah.GameForum.form.ChangingUserPasswordForm;
import com.lauyeah.GameForum.form.ChangingUserRoleForm;
import com.lauyeah.GameForum.form.CreatingUserForm;
import com.lauyeah.GameForum.form.UpdatingUserForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends UserDetailsService {
    Page<User> getAllUser(Pageable pageable);

    User getUserById(int id);

    User getUserByUsername(String username);

    void deleteUserById(int id);

    void createUser(CreatingUserForm form);

    void updateUser(UpdatingUserForm form);

    boolean existsByUsername(String username);

    void changeRole(ChangingUserRoleForm form);

    void activeUser(int id);

    boolean isUserIdExists(int id);

    boolean isAdminUserById(int id);

    boolean changeUserPassword(ChangingUserPasswordForm form);

    void lockUser(int id);

}
