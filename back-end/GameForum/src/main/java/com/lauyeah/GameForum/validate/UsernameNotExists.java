package com.lauyeah.GameForum.validate;

import javax.validation.Constraint;
import javax.validation.Payload;

import java.lang.annotation.*;

@Documented
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UsernameNotExistsValidator.class)
public @interface UsernameNotExists {
    String message() default "Username exists already";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
