package com.neptune.vismaya.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.model.ContactUs;

public interface ContactUsRepository extends JpaRepository<ContactUs, Long>{
	
	ContactUs findByCid(Long cid);
	
	void deleteByCid(Long cid);
}

