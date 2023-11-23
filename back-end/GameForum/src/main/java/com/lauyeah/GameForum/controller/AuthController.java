package com.lauyeah.GameForum.controller;

import com.lauyeah.GameForum.dto.LoginInfoDTO;
import com.lauyeah.GameForum.dto.UserDTO;
import com.lauyeah.GameForum.entity.User;
import com.lauyeah.GameForum.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = "api/v1/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private IUserService userService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/login")
    public UserDTO login(Principal principal) {
        String username = principal.getName();
        User user = userService.getUserByUsername(username);
        return modelMapper.map(user, UserDTO.class);
    }
}
