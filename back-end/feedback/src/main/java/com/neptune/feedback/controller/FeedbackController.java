package com.neptune.feedback.controller;

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

import com.neptune.feedback.dto.request.FeedbackRequest;
import com.neptune.feedback.constant.Api;
import com.neptune.feedback.dto.response.FeedbackResponse;
import com.neptune.feedback.service.FeedbackService;


import lombok.RequiredArgsConstructor;

@RestController
//@RequestMapping(Api.FEEDBACK)
@RequestMapping("/feedback")
@RequiredArgsConstructor
public class FeedbackController {

	private final FeedbackService feedbackService;
	
	@PostMapping("/addFeed")
    public ResponseEntity<String> saveFeedback(@RequestBody FeedbackRequest request) {
        boolean isSaved = feedbackService.saveFeedback(request);
        return isSaved ? ResponseEntity.ok().body("Feedback Saved") : ResponseEntity.badRequest().build();
    }

    @GetMapping("/getFeed")
    public ResponseEntity<List<FeedbackResponse>> getFeedbacks() {
        List<FeedbackResponse> feedbackList = feedbackService.getFeedbacks();
        return !feedbackList.isEmpty() ? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
    }
    @PutMapping("/updateFeed/{fid}")
	public ResponseEntity<FeedbackResponse> updateArt(@RequestBody FeedbackRequest contactRequest, @PathVariable Long fid){
    	FeedbackResponse response = feedbackService.updateFeedback(contactRequest, fid);
		return response != null ? ResponseEntity.ok().body(response):
			ResponseEntity.notFound().build();
	}
    @DeleteMapping("/deleteFeed/{fid}")
    public ResponseEntity<String> deleteMsg(@PathVariable Long fid){
    	boolean isDeleted = feedbackService.deleteFeedback(fid);
    	return isDeleted ? ResponseEntity.ok().body("Deleted Sucessfully"):
    		ResponseEntity.notFound().build();
    }

}
