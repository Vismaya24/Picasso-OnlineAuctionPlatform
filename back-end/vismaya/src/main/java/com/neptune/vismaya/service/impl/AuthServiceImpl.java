package com.neptune.vismaya.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neptune.vismaya.dto.request.AuthenticationRequest;
import com.neptune.vismaya.dto.request.RegisterRequest;
import com.neptune.vismaya.dto.response.AuthenticationResponse;
import com.neptune.vismaya.repository.UserRepository;
import com.neptune.vismaya.service.AuthService;
import com.neptune.vismaya.util.JwtUtil;
import com.neptune.vismaya.model.User;
import com.neptune.vismaya.model.enumerate.Role;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .pword(passwordEncoder.encode(request.getPword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .address(request.getAddress())
                    .userimg(request.getUserimg())
    				.birthdate(request.getBirthdate())
    				.country(request.getCountry())
    				.state(request.getState())
    				.district(request.getDistrict())
    				.house(request.getHouse())
    				.pincode(request.getPincode())
                    .phno(request.getPhno())
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
                .address(user.getAddress())
                .phno(user.getPhno())
                .userimg(user.getUserimg())
				.birthdate(user.getBirthdate())
				.country(user.getCountry())
				.state(user.getState())
				.district(user.getDistrict())
				.house(user.getHouse())
				.pincode(user.getPincode())
                .build();
    }
	
}
