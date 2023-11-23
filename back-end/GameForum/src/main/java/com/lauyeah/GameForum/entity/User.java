package com.lauyeah.GameForum.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "`User`")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 30, nullable = false, unique = true)
    private String username;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(name = "pwd", nullable = false, length = 800)
    private String password;

    @Column(length = 500)
    private String avatar;

    @Column(length = 15, nullable = false, unique = true)
    private String phone;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(length = 50)
    private String fullname;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "join_date")
    @CreationTimestamp
    private LocalDateTime joinDate;

    @Column(name = "`role`")
    @Enumerated(EnumType.STRING)
    private Role role = Role.MEMBER;

    @Column
    private boolean activation;
}
