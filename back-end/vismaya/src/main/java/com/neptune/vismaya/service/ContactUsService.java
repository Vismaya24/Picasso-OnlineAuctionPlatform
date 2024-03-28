package com.neptune.vismaya.service;

import java.util.List;

import com.neptune.vismaya.dto.request.ContactUsRequest;
import com.neptune.vismaya.dto.response.ContactUsResponse;

public interface ContactUsService {

	List<ContactUsResponse> getMsg();

	ContactUsResponse updateMsg(ContactUsRequest contactRequest, Long cid);

	boolean deleteMsg(Long cid);

	boolean saveMsg(ContactUsRequest contactRequest);

}
