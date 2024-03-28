package com.neptune.vismaya.service;

import java.util.List;

import com.neptune.vismaya.dto.request.UserRequest;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.UserResponse;

public interface UserService {

	List<UserResponse> getAllUser();

	UserResponse updateUser(UserRequest userRequest, Long uid);

	boolean deleteUser(Long uid);

	UserResponse getUser(Long uid);

	CountResponse userCount();

	//snew code

	List<UserResponse> getUsersMapped();
	
}