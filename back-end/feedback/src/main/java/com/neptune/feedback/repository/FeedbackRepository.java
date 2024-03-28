package com.neptune.feedback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.feedback.model.Feedback;


public interface FeedbackRepository extends JpaRepository<Feedback, Long>{

	Optional<Feedback> findByUsernameAndUseremail(String username, String useremail);

	Feedback findByFid(Long fid);

	void deleteByFid(Long fid);

}
