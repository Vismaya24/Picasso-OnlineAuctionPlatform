package com.neptune.vismaya.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

    List<Order> findAllByUserUid(Long uid);

}
