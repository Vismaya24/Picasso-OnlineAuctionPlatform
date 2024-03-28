package com.neptune.feedback.service;

import java.util.List;

import com.neptune.feedback.dto.request.FeedbackRequest;
import com.neptune.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

	boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

	FeedbackResponse updateFeedback(FeedbackRequest contactRequest, Long cid);

	boolean deleteFeedback(Long cid);

}
