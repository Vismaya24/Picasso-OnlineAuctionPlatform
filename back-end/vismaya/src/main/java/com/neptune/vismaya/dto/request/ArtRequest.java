package com.neptune.vismaya.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArtRequest {

	private String artname;
	private double price;
	private String artist;
	private String style;
	private String type;
	private String size;
	private int year;
	private String artimg;
	private long artQty;
	private Long cid;

}
