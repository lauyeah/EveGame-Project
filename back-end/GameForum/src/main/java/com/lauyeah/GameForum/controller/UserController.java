package com.lauyeah.GameForum.controller;

import com.lauyeah.GameForum.dto.UserDTO;
import com.lauyeah.GameForum.entity.User;
import com.lauyeah.GameForum.form.ChangingUserPasswordForm;
import com.lauyeah.GameForum.form.ChangingUserRoleForm;
import com.lauyeah.GameForum.form.CreatingUserForm;
import com.lauyeah.GameForum.form.UpdatingUserForm;
import com.lauyeah.GameForum.service.IUserService;
import com.lauyeah.GameForum.validate.UserIdExists;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<UserDTO> getAllUser(@PageableDefault(sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<User> userPages = userService.getAllUser(pageable);
        List<User> userList = userPages.getContent();
        List<UserDTO> userDTOS = modelMapper.map(userList, new TypeToken<List<UserDTO>>() {
        }.getType());
        return new PageImpl<>(userDTOS, pageable, userPages.getTotalElements());
    }

    @GetMapping(value = "/{id}")
    public UserDTO getUserById(@PathVariable(name = "id") int id) {
        User user = userService.getUserById(id);
        return modelMapper.map(user, UserDTO.class);
    }

    @PostMapping
    public void createUser(@Valid @RequestBody CreatingUserForm form) {
        userService.createUser(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUserById(@PathVariable(name = "id") int id) {
        userService.deleteUserById(id);
    }

    @PutMapping(value = "/{id}")
    public void updateUser(@PathVariable(name = "id") int id, @Valid @RequestBody UpdatingUserForm form) {
        form.setId(id);
        userService.updateUser(form);
    }

    @PutMapping(value = "/role/{id}")
    public void changeUserRole(@PathVariable(name = "id") int id, @Valid @RequestBody ChangingUserRoleForm form) {
        form.setId(id);
        userService.changeRole(form);
    }

    @PutMapping(value = "/active/{id}")
    public void activeUser(@PathVariable(name = "id") int id) {
        userService.activeUser(id);
    }

    @PutMapping(value = "/lock/{id}")
    public void lockUser(@PathVariable(name = "id") int id) {
        userService.lockUser(id);
    }

    @PutMapping(value = "/{id}/password")
    public boolean changeUserPassword(@UserIdExists @PathVariable(name = "id") int id, @RequestBody ChangingUserPasswordForm form) {
        form.setId(id);
        return userService.changeUserPassword(form);
    }
}

