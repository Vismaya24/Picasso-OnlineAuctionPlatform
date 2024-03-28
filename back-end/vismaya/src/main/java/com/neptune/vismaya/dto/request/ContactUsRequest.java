package com.neptune.vismaya.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactUsRequest {

	private Long cid;
	private String name;
	private String email;
	private Long mobileno;
	private String message;
}
