package com.neptune.vismaya.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neptune.vismaya.dto.info.ArtInfo;
import com.neptune.vismaya.dto.request.OrderRequest;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.OrderResponse;
import com.neptune.vismaya.model.Art;
import com.neptune.vismaya.model.Order;
import com.neptune.vismaya.model.OrderMapping;
import com.neptune.vismaya.model.User;
import com.neptune.vismaya.repository.ArtRepository;
import com.neptune.vismaya.repository.OrderRepository;
import com.neptune.vismaya.repository.UserRepository;
import com.neptune.vismaya.service.ArtService;
import com.neptune.vismaya.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    //private final UserRepository userRepository;
    private final ArtRepository artRepository;
    private final OrderRepository orderRepository;
    private final ArtService artService;
    private final UserRepository userRepository;
//    @Override
//    public boolean saveOrder(OrderRequest request) {
//        User user = userRepository.findByUid(request.getUid());
//        List<ArtInfo> productInfoList = request.getArt();
//        long orderTotal = calculateOrderTotal(productInfoList);
//
//        if (orderTotal <= 0) {
//            throw new IllegalArgumentException("Order total must be greater than zero.");
//        }
//
//        try {
//            Order order = createOrder(request, user, orderTotal, productInfoList);
//            orderRepository.save(order);
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//
//    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ArtInfo> productInfoList) {
//        Order order = Order.builder()
//                .orderDate(new Date())
//                .orderAddress(request.getOrderAddress())
//                .paymentMode(request.getPaymentMode())
//                .user(user)
//                .orderTotal(orderTotal)
//                .orderMappings(request.getArt().stream()
//                        .map(artRequest -> {
//                            Art art = artService.getArtModelId(artRequest.getAid());
//                            if (art != null) {
//                                return OrderMapping.builder().art(art).build();
//                            } else {
//                                throw new IllegalArgumentException("Invalid product ID: " + artRequest.getAid());
//                            }
//                        })
//                        .collect(Collectors.toList()))
//                .build();
//
//        //updateProductQuantities(productInfoList);
//
//        return order;
//    }
//
//    private List<Art> updateProductQuantities(List<ArtInfo> productInfoList) {
//        List<Art> updatedProducts = new ArrayList<>();
//
//        for (ArtInfo productInfo : productInfoList) {
//            Long productId = productInfo.getAid();
//            Long quantity = productInfo.getQuantity();
//
//            Art product = getArtOrThrow(productId);
//
////            if (product.getArtQuantity() < quantity) {
////                throw new IllegalArgumentException("Insufficient quantity for product ID: " +productId);
////            }
//
//            Art updatedProduct = createUpdatedProduct(product, quantity);
//            artRepository.save(updatedProduct);
//            updatedProducts.add(updatedProduct);
//        }
//
//        return updatedProducts;
//    }
//
//    private Art getArtOrThrow(Long foodId) {
//        return artRepository.findById(foodId)
//                .orElseThrow(() -> new IllegalArgumentException("Food not found for ID: " + foodId));
//    }
//
//    private Art createUpdatedProduct(Art art, Long quantity) {
//        Art updatedProduct = new Art();
//        updatedProduct.setAid(art.getAid());
//        updatedProduct.setArtname(art.getArtname());
//        updatedProduct.setPrice(art.getPrice());
//        updatedProduct.setArtimg(art.getArtimg());
//        return updatedProduct;
//    }
//
//    private long calculateOrderTotal(List<ArtInfo> menuInfoList) {
//        return menuInfoList.stream()
//                .mapToLong(menuInfo -> {
//                    Art product = getArtOrThrow(menuInfo.getAid());
//                    if (menuInfo.getQuantity()<=0) {
//                        throw new IllegalArgumentException(
//                                "Insufficient quantity for product ID: " +menuInfo.getQuantity());
//                    }
//                    return (long) (product.getPrice() * 1);
//                })
//                .sum();
//    }
//
//    @Override
//    public List<OrderResponse> getOrders(Long uid) {
//        return convertToOrderResponse(orderRepository.findAllByUserUid(uid));
//    }
//
//    public List<OrderResponse> convertToOrderResponse(List<Order> orders) {
//        return orders.stream()
//                .map(order -> {
//                    OrderResponse.OrderResponseBuilder builder = OrderResponse.builder()
//                            .oid(order.getOid())
//                            .orderDate(order.getOrderDate())
//                            .orderTotal(order.getOrderTotal())
//                            .orderAddress(order.getOrderAddress())
//                            .paymentMode(order.getPaymentMode());
//
//                    List<Art> products = order.getOrderMappings().stream()
//                            .map(OrderMapping::getArt)
//                            .collect(Collectors.toList());
//
//                    builder.art(products);
//
//                    return builder.build();
//                })
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public CountResponse orderCount() {
//        long count = orderRepository.count();
//        return CountResponse.builder().count(count).build();
//    }
	@Override
	public boolean saveOrder(OrderRequest request) {
		
			var data = Order.builder()
					.oid(request.getOid())
//					.orderDate(request.getOrderDate())
					.orderTotal(request.getOrderTotal())
					.orderAddress(request.getOrderAddress())
					.paymentMode(request.getPaymentMode())
					.artname(request.getArtname())
					.id(request.getId())
					.build();
			artRepository.save(data);
			return true;
			}
	@Override
	public List<OrderResponse> getOrders(Long uid) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CountResponse orderCount() {
		// TODO Auto-generated method stub
		return null;
	}


}