package com.neptune.vismaya.service;

import java.util.List;

import com.neptune.vismaya.dto.request.ArtRequest;
import com.neptune.vismaya.dto.response.ArtResponse;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.UserResponse;
import com.neptune.vismaya.model.Art;

public interface ArtService {

	boolean saveArt(ArtRequest artRequest);

	List<ArtResponse> getAllArt();

	ArtResponse updateArt(ArtRequest artRequest, Long aid);

	boolean deleteArt(Long aid);

	ArtResponse getArt(Long aid);

	CountResponse artCount();

	Art getArtModelId(long aid);

	boolean deleteFromBuy(Long aid);



}
