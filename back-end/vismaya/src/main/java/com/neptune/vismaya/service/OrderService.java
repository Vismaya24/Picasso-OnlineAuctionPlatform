package com.neptune.vismaya.service;

import java.util.List;

import com.neptune.vismaya.dto.request.OrderRequest;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();


}
