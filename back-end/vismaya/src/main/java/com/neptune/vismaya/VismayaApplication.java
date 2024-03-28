package com.neptune.vismaya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class VismayaApplication {

	public static void main(String[] args) {
		SpringApplication.run(VismayaApplication.class, args);
	}

}
