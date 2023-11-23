package com.lauyeah.GameForum.form;

import javax.validation.constraints.Pattern;

public class SetPostPinForm {
    @Pattern(regexp = "FIRST|SECOND|THIRD|FOURTH|FIFTH|", message = "just choose one: FIRST, SECOND, THIRD, FOURTH or FIFTH")
    private String postPin;
}
