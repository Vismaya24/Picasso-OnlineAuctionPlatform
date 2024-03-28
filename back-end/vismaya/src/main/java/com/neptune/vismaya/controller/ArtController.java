package com.neptune.vismaya.controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.vismaya.constant.Api;
import com.neptune.vismaya.dto.request.ArtRequest;
import com.neptune.vismaya.dto.response.ArtResponse;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.UserResponse;
import com.neptune.vismaya.model.Art;
import com.neptune.vismaya.repository.ArtRepository;
import com.neptune.vismaya.service.ArtService;
import com.neptune.vismaya.service.impl.ArtServiceImpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@RestController
//@RequestMapping(Api.ART)
@RequestMapping("/neptune/art")
@RequiredArgsConstructor
@Tag(name = "Art")
public class ArtController {

	private final ArtService artService;
	private final ArtRepository artRepository;


	@PostMapping("/post")
	public ResponseEntity<String> saveArt(@RequestBody ArtRequest artRequest){
		boolean isArtSaved = artService.saveArt(artRequest);
		return isArtSaved ? ResponseEntity.status(201).body("Added Successfully"):
			   ResponseEntity.status(403).body("Something went wrong");
	}
	@GetMapping("/get")
	public ResponseEntity<List<ArtResponse>> getArt(){
		List<ArtResponse> artList= artService.getAllArt();
		return !artList.isEmpty() ? ResponseEntity.status(200).body(artList):
			ResponseEntity.noContent().build();
	}
	@GetMapping("/byId/{aid}")
	public ResponseEntity<ArtResponse> getArt(@PathVariable Long aid){
		ArtResponse artResponse = artService.getArt(aid);
		return artResponse != null ? ResponseEntity.ok().body(artResponse)
				: ResponseEntity.notFound().build();
	}
	@GetMapping("/getCount")
    public ResponseEntity<CountResponse> artCount() {
        CountResponse countResponse = artService.artCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }
	@PutMapping("/update/{aid}")
	public ResponseEntity<ArtResponse> updateArt(@RequestBody ArtRequest artRequest, @PathVariable Long aid){
		ArtResponse artResponse = artService.updateArt(artRequest, aid);
		return artResponse != null ? ResponseEntity.ok().body(artResponse):
			ResponseEntity.notFound().build();
	}
    @DeleteMapping("/delete/{aid}")
    public ResponseEntity<String> deleteArt(@PathVariable Long aid){
    	boolean isDeleted = artService.deleteArt(aid);
    	return isDeleted ? ResponseEntity.ok().body("Art Deleted Sucessfully"):
    		ResponseEntity.notFound().build();
    }
    @DeleteMapping("/deleteArt/{aid}")
    public ResponseEntity<String> deleteFromBuy(@PathVariable Long aid){
    	boolean isDeleted = artService.deleteFromBuy(aid);
    	return isDeleted ? ResponseEntity.ok().body("Art Deleted Sucessfully"):
    		ResponseEntity.notFound().build();
    }
    
    
}
