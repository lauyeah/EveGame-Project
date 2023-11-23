package com.lauyeah.GameForum.validate;

import com.lauyeah.GameForum.service.IUserService;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class UsernameNotExistsValidator implements ConstraintValidator<UsernameNotExists,String> {
    @Autowired
    private IUserService userService;
    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        return !userService.existsByUsername(username);
    }
}
