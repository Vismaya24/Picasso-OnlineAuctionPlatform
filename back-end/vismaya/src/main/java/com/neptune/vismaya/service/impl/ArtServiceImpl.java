package com.neptune.vismaya.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.neptune.vismaya.dto.request.ArtRequest;
import com.neptune.vismaya.dto.response.ArtResponse;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.UserResponse;
import com.neptune.vismaya.model.Art;
import com.neptune.vismaya.model.User;
import com.neptune.vismaya.repository.ArtRepository;
import com.neptune.vismaya.service.ArtService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class ArtServiceImpl implements ArtService{
	
	private final ArtRepository artRepository ; 

	public List<ArtResponse> getAllArt() {
		List<Art> artList = artRepository.findAll();
		
		return artList.stream()
				.map(this::mapToArtResponse)
				.collect(Collectors.toList());
	}

	public boolean saveArt(ArtRequest artRequest) {
		Optional<Art> isArtOptional = artRepository.existsByArtname(artRequest.getArtname());
		if(isArtOptional.isPresent()) {
			var data = Art.builder()
					.artname(artRequest.getArtname())
					.artist(artRequest.getArtist())
					.price(artRequest.getPrice())
					.type(artRequest.getType())
					.style(artRequest.getStyle())
					.year(artRequest.getYear())
					.size(artRequest.getSize())
					.artimg(artRequest.getArtimg())
					.build();
			artRepository.save(data);
			return true;
		}
		return false;
	}
	public boolean deleteArt(Long aid) {
		
		Art art = artRepository.findByAid(aid);
		if(art != null) {
			artRepository.deleteByAid(aid);
			return true;
		} else {
			return false;			
		}
	}
	public ArtResponse updateArt(ArtRequest artRequest, Long aid) {
		Art art = artRepository.findByAid(aid);
		if(art != null) {
			art.setArtname(artRequest.getArtname());
			art.setArtist(artRequest.getArtist());
			art.setPrice(artRequest.getPrice());
			art.setType(artRequest.getType());
			art.setStyle(artRequest.getStyle());
			art.setYear(artRequest.getYear());
			art.setSize(artRequest.getSize());
			art.setArtimg(artRequest.getArtimg());
			artRepository.save(art);
			return mapToArtResponse(art);
		}
		else {
	         throw new EntityNotFoundException("User with id "+ aid + "not found");
		}
	}
	public ArtResponse getArt(Long aid) {
		Art art = artRepository.findByAid(aid);
		return mapToArtResponse(art);
	}
	
    public CountResponse artCount() {
        long count = artRepository.count();
        return CountResponse.builder().count(count).build();
    }
	private ArtResponse mapToArtResponse(Art art) {
		return ArtResponse.builder()
				.aid(art.getAid())
				.artname(art.getArtname())
				.artist(art.getArtist())
				.price(art.getPrice())
				.type(art.getType())
				.style(art.getStyle())
				.year(art.getYear())
				.size(art.getSize())
				.artimg(art.getArtimg())
				.build();
	}

	@Override
	public Art getArtModelId(long aid) {
		return artRepository.findByAid(aid);
	}

	@Override
	public boolean deleteFromBuy(Long aid) {
		Art art = artRepository.findByAid(aid);
		if(art != null) {
			artRepository.deleteByAid(aid);
			return true;
		} else {
			return false;			
		}
	}
	

}
