package com.lauyeah.GameForum.validate;

import com.lauyeah.GameForum.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UserIdExistsValidator implements ConstraintValidator<UserIdExists, Integer> {
    @Autowired
    private IUserService userService;

    @Override
    public boolean isValid(Integer id, ConstraintValidatorContext context) {
        return userService.isUserIdExists(id);
    }
//    @Override
//    public boolean isValid(Integer id, ConstraintValidatorContext context) {
//        return userService.isUserIdExists(id);
//    }
}
