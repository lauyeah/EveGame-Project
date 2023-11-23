package com.lauyeah.GameForum.validate;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UserIdExistsValidator.class)
public @interface UserIdExists {

    String message() default "User ID not exists";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
