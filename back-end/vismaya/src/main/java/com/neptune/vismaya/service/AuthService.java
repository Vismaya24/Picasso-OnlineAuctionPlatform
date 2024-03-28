package com.neptune.vismaya.service;

import com.neptune.vismaya.dto.request.AuthenticationRequest;
import com.neptune.vismaya.dto.request.RegisterRequest;
import com.neptune.vismaya.dto.response.AuthenticationResponse;

public interface AuthService {

	boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
