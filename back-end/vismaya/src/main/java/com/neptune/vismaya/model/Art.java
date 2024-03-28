package com.neptune.vismaya.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "art")
public class Art {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long aid;
	
	@Column(length = 300, nullable = false)
	private String artname;
	
	private double price;
	
	private String artist;
	
	private String style;
	
	private String type;
	
	private String size;
	
	private int year;
	
	private String artimg;
	
	private Long artQty;

	//new code
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private User user;
	
}
