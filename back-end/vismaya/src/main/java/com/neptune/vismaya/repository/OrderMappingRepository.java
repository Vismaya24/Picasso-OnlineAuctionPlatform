package com.neptune.vismaya.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}