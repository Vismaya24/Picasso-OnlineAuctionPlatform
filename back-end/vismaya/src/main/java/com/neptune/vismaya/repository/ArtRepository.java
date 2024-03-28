package com.neptune.vismaya.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.dto.request.ArtRequest;
import com.neptune.vismaya.dto.response.ArtResponse;
import com.neptune.vismaya.model.Art;
import com.neptune.vismaya.model.Order;

public interface ArtRepository extends JpaRepository<Art, Long>{

	Optional<Art> existsByArtname(String artname);

	void deleteByAid(Long aid);

	Art findByAid(Long aid);

	void save(Order data);


	

}
