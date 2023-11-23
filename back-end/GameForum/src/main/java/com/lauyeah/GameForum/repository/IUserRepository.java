package com.lauyeah.GameForum.repository;

import com.lauyeah.GameForum.entity.Role;
import com.lauyeah.GameForum.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface IUserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {
    boolean existsByUsername(String username);

    User findByUsername(String username);

    @Transactional
    @Modifying
    @Query("update User set role = :newRole where id = :id")
    void changeRole(int id, Role newRole);

    @Transactional
    @Modifying
    @Query("update User set activation = true where id = :id")
    void activeUser(int id);

    @Transactional
    @Modifying
    @Query("update User set password = :newPassword where id = :id")
    void changePassword(int id, String newPassword);

    @Transactional
    @Modifying
    @Query("update User set activation = false where id = :id")
    void lockUser(int id);
}
