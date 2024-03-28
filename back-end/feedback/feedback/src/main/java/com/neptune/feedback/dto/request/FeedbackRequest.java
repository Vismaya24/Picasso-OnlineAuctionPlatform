package com.neptune.feedback.dto.request;

import com.neptune.feedback.dto.response.FeedbackResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {
    private String username;
    private String useremail;
    private String phno;
    private String message;
}