package com.neptune.vismaya.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.vismaya.constant.Api;
import com.neptune.vismaya.dto.request.ContactUsRequest;
import com.neptune.vismaya.dto.response.ContactUsResponse;
import com.neptune.vismaya.service.ContactUsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.CONTACT)	
@RequiredArgsConstructor
public class ContactUsController {

	private final ContactUsService contactService;

	@PostMapping("/sendMsg")
	public ResponseEntity<String> saveMsg(@RequestBody ContactUsRequest contactRequest){
		boolean isSaved = contactService.saveMsg(contactRequest);
		return isSaved ? ResponseEntity.status(201).body("Sent Successfully"):
			   ResponseEntity.status(403).body("Something went wrong");
	}
	@GetMapping("/getMsg")
	public ResponseEntity<List<ContactUsResponse>> getMsg(){
		List<ContactUsResponse> msgList= contactService.getMsg();
		return !msgList.isEmpty() ? ResponseEntity.status(200).body(msgList):
			ResponseEntity.noContent().build();
	}
	@PutMapping("/update/{cid}")
	public ResponseEntity<ContactUsResponse> updateArt(@RequestBody ContactUsRequest contactRequest, @PathVariable Long cid){
		ContactUsResponse response = contactService.updateMsg(contactRequest, cid);
		return response != null ? ResponseEntity.ok().body(response):
			ResponseEntity.notFound().build();
	}
    @DeleteMapping("/delete/{cid}")
    public ResponseEntity<String> deleteMsg(@PathVariable Long cid){
    	boolean isDeleted = contactService.deleteMsg(cid);
    	return isDeleted ? ResponseEntity.ok().body("Deleted Sucessfully"):
    		ResponseEntity.notFound().build();
    }
}
