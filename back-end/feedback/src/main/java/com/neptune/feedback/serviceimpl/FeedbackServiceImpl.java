package com.neptune.feedback.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.neptune.feedback.dto.request.FeedbackRequest;
import com.neptune.feedback.dto.response.FeedbackResponse;
import com.neptune.feedback.model.Feedback;
import com.neptune.feedback.repository.FeedbackRepository;
import com.neptune.feedback.service.FeedbackService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{

    private final FeedbackRepository feedbackRepository;
    
	@Override
    public boolean saveFeedback(FeedbackRequest request) {
        if (feedbackRepository.findByUsernameAndUseremail(request.getUsername(),
                request.getUseremail()).isPresent()) {
            return false;
        }

        var feedback = Feedback.builder()
                .username(request.getUsername())
                .useremail(request.getUseremail())
                .phno(request.getPhno())
                .message(request.getMessage())
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setPhno(feedback.getPhno());
                    response.setMessage(feedback.getMessage());
                    return response;
                })
                .collect(Collectors.toList());
    }

	@Override
	public FeedbackResponse updateFeedback(FeedbackRequest contactRequest, Long fid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteFeedback(Long fid) {
		Feedback contact = feedbackRepository.findByFid(fid);
		if(contact != null) {
			feedbackRepository.deleteByFid(fid);
			return true;
		} else {
			return false;			
		}
	}
}
