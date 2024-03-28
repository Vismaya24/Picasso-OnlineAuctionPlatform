package com.neptune.vismaya.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.constant.Api;
import com.neptune.vismaya.dto.request.UserRequest;
import com.neptune.vismaya.dto.response.UserResponse;
import com.neptune.vismaya.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
//@RequestMapping(Api.USER)
@RequestMapping("/neptune/user")
@RequiredArgsConstructor
@Tag(name = "User")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/get")
    public ResponseEntity<List<UserResponse>> getAllUser() {
        List<UserResponse> userList = userService.getAllUser();
        return !userList.isEmpty() ? ResponseEntity.status(200).body(userList)
                : ResponseEntity.noContent().build();
    }
	@GetMapping("/byId/{uid}")
	public ResponseEntity<UserResponse> getUser(@PathVariable Long uid){
		UserResponse userResponse = userService.getUser(uid);
		return userResponse != null ? ResponseEntity.ok().body(userResponse)
				: ResponseEntity.notFound().build();
	}
	@PutMapping("/edit/{uid}")
	public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest userRequest, @PathVariable Long uid){
		UserResponse userResposne = userService.updateUser(userRequest, uid);
		return userResposne != null ? ResponseEntity.ok().body(userResposne) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/delete/{uid}")
	public ResponseEntity<String> deleteUser(@PathVariable Long uid){
		boolean isDeleted = userService.deleteUser(uid);
		return isDeleted ? ResponseEntity.ok().body("User deleted successfully !")
				          :ResponseEntity.notFound().build();
	}
	@GetMapping("/getCount")
    public ResponseEntity<CountResponse> userCount() {
        CountResponse countResponse = userService.userCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }
	//new code
	@GetMapping("/getMapped")
    public ResponseEntity<List<UserResponse>> getUsersMapped() {
        List<UserResponse> hotelResponse = userService.getUsersMapped();
        return !hotelResponse.isEmpty() ? ResponseEntity.ok().body(hotelResponse)
                : ResponseEntity.noContent().build();
    }
}