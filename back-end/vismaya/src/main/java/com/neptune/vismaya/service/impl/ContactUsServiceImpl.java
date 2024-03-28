package com.neptune.vismaya.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.neptune.vismaya.dto.request.ContactUsRequest;
import com.neptune.vismaya.dto.response.ContactUsResponse;
import com.neptune.vismaya.model.ContactUs;
import com.neptune.vismaya.repository.ContactUsRepository;
import com.neptune.vismaya.service.ContactUsService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class ContactUsServiceImpl implements ContactUsService {
	
	private final ContactUsRepository contactRepository ; 

	public boolean saveMsg(ContactUsRequest contactRequest) {
        
			var data = ContactUs.builder()
					.name(contactRequest.getName())
					.email(contactRequest.getEmail())
					.mobileno(contactRequest.getMobileno())
					.message(contactRequest.getMessage())
					.build();
			contactRepository.save(data);
			return true;
	}

	public List<ContactUsResponse> getMsg() {
			List<ContactUs> list = contactRepository.findAll();
			
			return list.stream()
					.map(this::mapToContactResponse)
					.collect(Collectors.toList());
	}

	public ContactUsResponse updateMsg(ContactUsRequest contactRequest, Long cid) {
		
		ContactUs contact = contactRepository.findByCid(cid);
		if(contact != null) {
			contact.setName(contactRequest.getName());
			contact.setEmail(contactRequest.getEmail());
			contact.setMobileno(contactRequest.getMobileno());
			contact.setMessage(contactRequest.getMessage());
			return mapToContactResponse(contact);
		}
		else {
	         throw new EntityNotFoundException("User with id "+ cid + "not found");
		}
	}

	public boolean deleteMsg(Long cid) {
		
		ContactUs contact = contactRepository.findByCid(cid);
		if(contact != null) {
			contactRepository.deleteByCid(cid);
			return true;
		} else {
			return false;			
		}
	}
	
	private ContactUsResponse mapToContactResponse(ContactUs contact) {
		return ContactUsResponse.builder()
				.cid(contact.getCid())
				.name(contact.getName())
				.email(contact.getEmail())
				.mobileno(contact.getMobileno())
				.message(contact.getMessage())
				.build();
	}

}
