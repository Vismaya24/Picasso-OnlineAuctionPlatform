package com.neptune.vismaya.dto.request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	
    private String name;
    private String email;
    private String pword;
    private String role;
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