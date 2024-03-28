package com.neptune.feedback.dto.response;

import com.neptune.feedback.model.Feedback;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackResponse {
    private Long fid;
    private String username;
    private String useremail;
    private String phno;
    private String message;
}