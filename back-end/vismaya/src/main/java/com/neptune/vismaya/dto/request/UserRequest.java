package com.neptune.vismaya.dto.request;

import java.util.Date;

import com.neptune.vismaya.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRequest {
	
	private String name;
    private String email;
    private String pword;
    private Boolean isEnabled;
    private Role role;
    private Long phno;    
    private String address;
    private String userimg;
	private String birthdate;
	private String country;
	private String state;
	private String district;
	private String house;
	private String pincode;
	
}
