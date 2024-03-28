package com.neptune.vismaya.dto.request;

import java.util.Date;
import java.util.List;

import com.neptune.vismaya.dto.info.ArtInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
	
    private String orderAddress;
    private Date orderDate;
    private Long orderTotal;
    private Long oid;
    private String paymentMode;
    private Long uid;
    private String artname;
    private Long id;
    private List<ArtInfo> art;
}
